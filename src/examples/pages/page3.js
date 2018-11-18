import React, { Component } from 'react';

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

          let setDashoffset = function (el) {
            let l = el.getTotalLength();
            el.setAttribute('stroke-dasharray', l);
            return [l, 0];
          }

          timeline.add({
            targets: '.left-right, .mid-right, .right-right',
            offset: 1,
            strokeDashoffset: {
              value: setDashoffset,
              duration: 1000,
              easing: 'easeInOutSine',
            },
            delay: function (el, index) {
              return index * 500;
            },
          });

          timeline.add({
            targets: '.left-left, .mid-left, .right-left',
            offset: 1,
            strokeDashoffset: {
              value: setDashoffset,
              duration: 1000,
              easing: 'easeInOutSine',
            },
            delay: function (el, index) {
              return index * 500 + 1000;
            },
          });

          timeline.add({
            targets: '.mid-mid, .right-mid',
            offset: 1,
            strokeDashoffset: {
              value: setDashoffset,
              duration: 1000,
              easing: 'easeInOutSine',
            },
            delay: function (el, index) {
              return index * 700 + 2000;
            },
          });

          timeline.add({
            targets: '.left-mid',
            offset: 1,
            strokeDashoffset: function (el) {
              let pathLength = el.getTotalLength();
              el.setAttribute('stroke-dasharray', pathLength);
              return [-pathLength, 0];
            },
            duration: 1000,
            easing: 'easeInOutSine',
            delay: 1000,
            direction: 'normal'
          });

          timeline.add({
            targets: '.sun-circle, .sun-1, .sun-2, .sun-3, .sun-4, .sun-5, .sun-6',
            offset: 1,
            strokeDashoffset: {
              value: setDashoffset,
              duration: 500,
              easing: 'easeInOutSine',
            },
            delay: function (el, index) {
              return index * 500;
            },
            direction: 'normal',
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
              <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="1500px" height="1500px" viewBox="0 0 500 500" enableBackground="new 0 0 500 500" >
                <g>
                  <path fill="none" className='left-left' stroke="#212121" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M110.584 252.794l-95.092 95.093" />
                  <path fill="none" className='left-right' stroke="#212121" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M205.74 347.951l-95.156-95.157" />
                  <path fill="none" className='left-mid' stroke="#212121" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M136.365 348.349l-25.781-95.555" />
                </g>
                <g>
                  <path fill="none" className='mid-left' stroke="#212121" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M213.015 190.61l-69.834 69.833" />
                  <path fill="none" className='mid-right' stroke="#212121" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M370.752 348.349L213.015 190.61" />
                  <path fill="none" className='mid-mid' stroke="#212121" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M213.015 190.61l67.195 157.739" />
                </g>
                <g>
                  <path fill="none" className='right-right' stroke="#212121" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M483.28 348.256L375.945 240.918" />
                  <path fill="none" className='right-left' stroke="#212121" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M375.945 240.918l-44.469 44.466" />
                  <path fill="none" className='right-mid' stroke="#212121" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M375.945 240.918l48.11 107.43" />
                </g>
                <g>
                  <path fill="none" className='sun-circle' stroke="#212121" strokeWidth="5.7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M318.891 210.348c-10.083 0-18.253-8.172-18.253-18.253 0-10.081 8.17-18.252 18.253-18.252 10.08 0 18.253 8.172 18.253 18.252C337.144 202.176 328.971 210.348 318.891 210.348z" />
                  <path fill="none" className='sun-1' stroke="#212121" strokeWidth="5.7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M318.891 163.364v-14.197" />
                  <path fill="none" className='sun-2' stroke="#212121" strokeWidth="5.7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M343.555 177.357l12.186-7.283" />
                  <path fill="none" className='sun-3' stroke="#212121" strokeWidth="5.7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M344.193 205.707l12.504 6.726" />
                  <path fill="none" className='sun-4' stroke="#212121" strokeWidth="5.7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M320.825 234.98l-0.639-14.183" />
                  <path fill="none" className='sun-5' stroke="#212121" strokeWidth="5.7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M294.916 207.93l-11.845 7.824" />
                  <path fill="none" className='sun-6' stroke="#212121" strokeWidth="5.7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M293 179.636l-12.79-6.154" />
                </g>
              </svg>
            </div>
          );
        }
      }
    }
    ]
  }
}
