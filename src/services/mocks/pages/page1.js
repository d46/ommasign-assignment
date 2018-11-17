import React, { Component } from 'react';

export default {
  page: 'Page 0',
  nextPage: (next) => setTimeout(next, 2000),
  scene: {
    elements: [{
      type: 'Comp',
      name: 'Component',
      component: class extends Component {

        state = {
          els: [],
          elRefs: [],
          numberOfEls: 100
        }

        componentWillMount() {
          const {
            numberOfEls
          } = this.state;

          const div = ({ width, height, backgroundColor, cRef }) => {
            return (
              <div style={{
                width,
                height,
                backgroundColor,
                position: 'absolute'
              }}
              ref={ref => cRef(ref)}
              key={Math.random()}
              ></div> 
            )
          }
          
          let elRefs = [];
          let els = [];

          for (let i = 0; i < numberOfEls; i++) {
            let hue = Math.round(360 / numberOfEls * i);
            const el = div({
              backgroundColor:'hsl(' + hue + ', 40%, 60%)',
              width: 1,
              height: 1,
              cRef: (elRef) => { elRefs.push(elRef) }
            });
            els.push(el);
          }

          this.setState({
            elRefs,
            els
          });
        }

        componentDidMount() {
          const {
            numberOfEls
          } = this.state;
          const duration = 1000;
          const midScreenX = window.innerWidth / 2;
          const midScreenY = window.innerHeight / 2;
          const radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
          
          this.state.elRefs.forEach((el, index) => {
            let angle = Math.random() * Math.PI * 2;
            this.props.timeline.add({
              targets: this.state.elRefs[index],
              width: ['1px', '10px'],
              height: ['1px', '10px'],
              left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
              top: [midScreenY + 'px', Math.sin(angle) * radius + midScreenY + 'px'],
              delay: (duration / numberOfEls) * index,
              duration: duration,
              easing: 'easeInExpo',
              offset: 30 * index
            });
          });
        }

        render() {
          const {
            els
          } = this.state;

          return (
            <div style={{ 
              width: '100%',
              height: '100%',
              position: 'absolute',
              background: '#111116'
             }}>
              {els.length > 0 && els}
            </div>
          );
        }
      }
    }
  ]
  }
}
