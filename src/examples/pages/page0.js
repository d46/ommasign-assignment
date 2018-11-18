export default {
  page: 'Page 1',
  nextPage: (next) => setTimeout(next, 2000),
  scene: {
    elements: [
      {
      type: 'Image',
      name: 'BG',
      url: 'https://i1.wp.com/chezmartacatering.com/wp-content/uploads/2017/01/cropped-OGA1IU0.jpg',
      id: 'a43139de98bca9b9ae2eb6627dd72b8450791cee',
      style: {
        display: 'inline',
        position: 'absolute',
        height: '100%'
      }
    }, {
      type: 'Image',
      name: 'Hamburger',
      url: 'https://image.ibb.co/eFTKS0/kisspng-junk-food-fast-food-hamburger-french-fries-pizza-junk-food-png-transparent-images-5aaeabbe9ce113-9834250315213966706426.png',
      id: 'be53a0541a6d36f6ecb879fa2c584b08',
      style: {
        display: 'inline',
        position: 'absolute',
      }
    }, {
      type: 'Image',
      name: 'Ribbon',
      url: 'https://image.ibb.co/cvp4uf/ribbon.png',
      id: 'cd4299719b9aef0c7bce504006f52529',
      style: {
        display: 'inline',
        position: 'absolute',
        width: 1020
      }
    }, {
      type: 'Image',
      name: 'Friez',
      url: 'http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BK_Fries-Detail.png',
      id: 'cd4299719b9ae2ad23bce504006f52529',
      style: {
        display: 'inline',
        position: 'absolute',
        zIndex: 5,
        width: 890
      }
    }
  ],
    actions: [{
      action: 'add',
      target: 'cd4299719b9ae2ad23bce504006f52529',
      data: ({ targets, positionInfo }) => {
        const {
          width
        } = positionInfo;
        return {
          targets,
          translateX: -width,
          translateY: 800,
          easing: 'easeOutBounce',
          duration: 1,
        }
      }
    }, {
      action: 'add',
      target: 'be53a0541a6d36f6ecb879fa2c584b08',
      data: ({ targets, positionInfo }) => {
        const {
          height
        } = positionInfo;
        return {
          targets,
          translateX: 950,
          translateY: -height,
          easing: 'easeOutBounce',
          duration: 1,
          offset: 30
        }
      }
    }, {
      action: 'add',
      target: 'cd4299719b9aef0c7bce504006f52529',
      data: ({ targets, positionInfo }) => {
        const {
          width
        } = positionInfo;
        return {
          targets,
          translateX: -width,
          translateY: 0,
          easing: 'easeOutBounce',
          duration: 1,
        }
      }
    }, {
      action: 'add',
      target: 'cd4299719b9aef0c7bce504006f52529',
      data: ({ targets, positionInfo }) => {
        return {
          targets,
          translateX: 0,
          translateY: 0,
          easing: 'easeOutExpo',
          offset: 3000,
        }
      }
    }, {
      action: 'add',
      target: 'a43139de98bca9b9ae2eb6627dd72b8450791cee',
      data: ({ targets, positionInfo }) => {
        const {
          width
        } = positionInfo;
        return {
          targets,
          translateX: (window.innerWidth / 2) - (width / 2),
          translateY: 0,
          easing: 'easeOutExpo',
          duration: 1,
          offset: 1,
        }
      }
    }, {
      action: 'add',
      target: 'be53a0541a6d36f6ecb879fa2c584b08',
      data: ({ targets, positionInfo }) => {
        return {
          targets,
          translateX: 950,
          translateY: 375,
          // easing: 'easeOutBounce',
          offset: 2000,
          duration: 1000,
          direction: 'alternate',
          easing: 'easeOutBounce',
          scaleX: [
            { value: 1, duration: 100, delay: 1000, easing: 'easeOutBounce', elasticity: 1300 },
            { value: 1.3, duration: 300, easing: 'easeOutBounce', elasticity: 1000 },
          ],
        }
      }
    }, {
      action: 'add',
      target: 'cd4299719b9ae2ad23bce504006f52529',
      data: ({ targets, positionInfo }) => {
        return {
          targets,
          translateX: 60,
          translateY: 90,
          easing: 'easeOutExpo',
          offset: 2000,
        }
      }
    },
  ]
  }
}
