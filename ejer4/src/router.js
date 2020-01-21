import Vue from 'vue'
import Router from 'vue-router'

import BookList from './components/BookList.vue'
import BookDetail from './components/BookDetail.vue'
import BookEdit from './components/BookEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/books' },
    { path: '/books', name: 'bookslist', component: BookList },
    { path: '/book/edit/:id', name: 'bookEdit', component: BookEdit },
    { path: '/book/new', name: 'bookEdit', component: BookEdit },
    { path: '/book/:id', name: 'bookDetail', component: BookDetail }    
  ]
})