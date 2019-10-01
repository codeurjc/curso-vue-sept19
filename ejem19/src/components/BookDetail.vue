<template>
  <div>
    <h2>{{book.title}}</h2>
    <div>
      <label>Id:</label>
      {{book.id}}
    </div>
    <div>
      <label>Description:</label>
      {{book.description}}
    </div>
    <p>
      <router-link to="/books">Back</router-link> -
      <router-link v-if="exists(book.id-1)" :to="'/book/'+(book.id-1)">&lt;&lt;</router-link> -
      <router-link v-if="exists(book.id+1)" :to="'/book/'+(book.id+1)">&gt;&gt;</router-link>
    </p>
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
    },
    exists(id){
      return books.getBook(id) !== undefined;
    }
  }
}
</script>