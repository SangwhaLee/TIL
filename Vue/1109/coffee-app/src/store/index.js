import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: true,
        image: '<https://source.unsplash.com/featured/?americano>'
      },
      {
        title: '카페모카',
        price: 4000,
        selected: false,
        image: '<https://source.unsplash.com/featured/?mocha>'
      },
      {
        title: '밀크티',
        price: 3500,
        selected: false,
        image: '<https://source.unsplash.com/featured/?milktea>'
      },
      {
        title: '말차',
        price: 4000,
        selected: false,
        image: '<https://source.unsplash.com/featured/?match>'
      },
      {
        title: '에스프레소',
        price: 3500,
        selected: false,
        image: '<https://source.unsplash.com/featured/?espresso>'
      },
    ],
    sizeList: [
      {
        name:'small',
        price: 500,
        selected: true,
      },
      {
        name:'medium',
        price: 800,
        selected: false,
      },
      {
        name:'large',
        price: 1200,
        selected: false,
      }
    ],
  },
  getters: {
  },
  mutations: {
    addOrder: function () {
      
    },
    updateMenuList: function () {},
    updateSizeList: function () {},
  },
  actions: {
  },
  modules: {
  }
})