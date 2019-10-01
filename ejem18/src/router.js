import Vue from 'vue'
import Router from 'vue-router'

import BookList from './components/BookList.vue'
import BookDetail from './components/BookDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/books' },
    { path: '/books', name: 'bookslist', component: BookList },
    { path: '/book/:id', name: 'bookDetail', component: BookDetail }
  ]
})