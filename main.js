new Vue({
  el: '#app',
  mounted () {
    new Swiper('.swiper-container', {
      effect: 'fade',
      grabCursor: true
    });
  },
  data: {
    msg: 'Hello World',
    projects: [
      {
        id: 1,
        title: 'Bicycle',
        img: './images/bicycle.jpg',
        linkProject: 'https://arti911.github.io/bicycle/',
        linkGithub: 'https://github.com/arti911/bicycle'
      },
      {
        id: 2,
        title: 'Amazing',
        img: './images/amazing.jpg',
        linkProject: 'https://arti911.github.io/amazing/',
        linkGithub: 'https://github.com/arti911/amazing'
      }
    ]
  }
})