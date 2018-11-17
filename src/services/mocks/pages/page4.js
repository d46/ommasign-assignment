import React, { Component } from 'react';
import './page4.css';

export default {
  page: 'Page 0',
  nextPage: (next) => setTimeout(next, 2000),
  scene: {
    elements: [{
      type: 'Comp',
      name: 'Component',
      component: class extends Component {

        componentDidMount() {
          const {
            timeline
          } = this.props;
          
          timeline.add({
            targets: '#squares rect',
            translateX: ['-50%', '-50%'],
            translateY: ['-50%', '-50%'],
            rotate: [90, 0, -90],
            delay: (el, i) => 100 * i, 
            duration: (el, i) => 750,
            easing: 'easeInOutSine',
            direction: 'alternate'
          });
        }

        render() {
          return (
            <div style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              background: '#FFF'
            }}>
              <div className="squares" id="squares">
                <svg  width="100%" height="100%" viewBox="0 0 1920 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                  <g stroke="#000" strokeWidth="10px">
                    <rect height="150%" fill="#fff636" width="150%" x="50%" y="50%" />
                    <rect height="125%" fill="#cb89fc" width="125%" x="50%" y="50%" />
                    <rect height="100%" fill="#fc3035" width="100%" x="50%" y="50%" />
                    <rect fill="#77ebfd" height="75%" width="75%" x="50%" y="50%" />
                    <rect fill="#fc3035" height="50%" width="50%" x="50%" y="50%" />
                    <rect height="25%" width="25%" fill="#fff636" x="50%" y="50%" />
                  </g>
                </svg>
              </div>
            </div>
          );
        }
      }
    }
    ]
  }
}
