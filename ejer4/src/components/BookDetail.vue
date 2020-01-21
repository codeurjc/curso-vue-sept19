<template>
  <div>
    <h2>{{book.title}}</h2>
    <div><label>Id:</label>{{book.id}}</div>
    <div><label>Description:</label>{{book.description}}</div>
    <p><button @click="gotoBooks()">Back</button></p>
  </div>
</template>

<script>
import books from './books.js';

export default {
  computed: {
    book(){
      let id = this.$route.params.id;
      return books.getBook(id);
    }
  },
  methods: {
    gotoBooks() {
      this.$router.push('/books');
    }
  }
}
</script>