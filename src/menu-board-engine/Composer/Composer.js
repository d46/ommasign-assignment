import React, { Component } from 'react';
import './Composer.css';
import Logger from '../../utils/logger';
import PropTypes from 'prop-types';
import ElementFactory from './elements';

class Composer extends Component {
  state = {
    // Holds the elements as a HashMap
    elementStack: {},
    // Rendered element counts
    renderedCount: 0,
    // Holds the elements dom refernece as a HashMap
    elementRefs: {},
    showScene: false
  }

  async componentWillMount() {
    
    try {
      // Generate scene
      await this.generateElements();

    } catch (e) {
      Logger.error({
        message: e
      });
    }
  }

  async componentDidMount() {
    const {
      page,
      timeline
    } = this.props;
    // Set a callback to Timeline
    // Calls actionsFinished with in the nexPage middleware
    timeline.finished.then(() => {
      console.log("Next animation")
      page.nextPage(
        this.props.next
      )
    });

    try {
      // Start actions
      setTimeout(()=> {
        this.startActions(page.scene);
        setTimeout(() => {
          this.setState({
            showScene: true
          });
        }, 100);
      }, 100);
    } catch(e) {
      Logger.error({
        message: e
      });
    }
  }


  async generateElements() {
    const {
      page: {
        scene
      },
    } = this.props;

    if ( !scene.hasOwnProperty('elements') && scene.elements.length > 0 ) {
      return Logger.error({
        message: 'Generate Scene - Has no elements'
      });
    }

    const {
      elements
    } = scene;

    // ElementStack is an array holds
    // the whole information about elements
    // as a key value in the state
    const elementStack = elements.reduce((acc, element) => {
      // Get element factory with type
      const Element = ElementFactory[element.type];
      acc[element.id] = {
        Element,
        data: element,
        // Function to be called at rendering stage on React
        refCall: (el) => {
          let {
            elementRefs,
            renderedCount,
            elementStack
          } = this.state;

          // TODO: Better check for rendered elements
          // Set DOM reference to the state
          // Refs can only be accessible after rendered
          if (el && renderedCount < Object.keys(elementStack).length) {
            // Set element reference
            elementRefs[element.id] = el;
            // Increase rendered elements
            renderedCount += 1;
            // Update state
            this.setState({
              elementRefs,
              renderedCount
            });
          }
        }
      };
      return acc;
    }, {});

    this.setState({
      elementStack
    });
  }

  async startActions(scene) {
    const {
      timeline
    } = this.props;

    if ( !scene.hasOwnProperty('actions') ) {
      return Logger.error({
        message: 'Generate Scene - Has no actions'
      });
    }

    // Execute animations on DOM reference with animejs
    scene.actions.length > 0 && scene.actions.forEach(action => {
      if (action && action.hasOwnProperty('target') && action.target) {
        const targets = this.state.elementRefs[action.target];
        if (targets) {
          const positionInfo = targets.getBoundingClientRect();
          const tAction = action.data({
            positionInfo,
            targets
          });
          // Add next action to the timeline
          timeline.add(tAction);
        }
      }
    });
  }

  render() {
    const {
      elementStack,
      showScene
    } = this.state;
    const {
      timeline
    } = this.props;

    const elementStackKeys = Object.keys(elementStack);
    return (
      <div className="ComposerContainer"
        style={{
          opacity: showScene ? 1 : 0
        }}
      >
        {
          elementStackKeys.length > 0 && elementStackKeys.map(key => {
            let {
              Element,
              data,
              refCall
            } = elementStack[key];
            return <Element
              key={key}
              data={data}
              refCall={refCall}
              timeline={timeline}
            />
          })
        }
      </div>
    )
  }
}

Composer.propTypes = {
  actionsFinished: PropTypes.func,
  page: PropTypes.object
}

export default Composer;
