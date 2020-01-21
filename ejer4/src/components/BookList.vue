<template>
  <div>
    <h2>BOOKS</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="'/book/'+book.id">{{book.id}} - {{book.title}}</router-link>
      </li>
    </ul>

    <button @click="newBook()">New book</button>
  </div>
</template>

<script>
import books from './books.js';

export default {
  computed:{
    books(){
      return books.getBooks();
    }
  },
  methods:{
    newBook() {
      this.$router.push('/book/new');
    }
  }
}
</script>
