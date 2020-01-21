<template>
  <div>
    <h2>{{book.title}}</h2>
    <div><label>Id:</label>{{book.id}}</div>
    <div><label>Title:</label><input v-model="book.title"></div>
    <div><label>Description:</label><textarea v-model="book.description"></textarea>
    </div>
    <div>
      <button @click="cancel()">Cancel</button>
      <button @click="save()">Save</button>
    </div>
  </div>
</template>

<script>
import books from './books.js';

export default {
  data:()=>({
    book: {}
  }),
  created: function(){
    if(!this.$route.params.id){
      this.book = { title: "", description: ""};
    } else {
      let id = this.$route.params.id;
      this.book = books.getBook(id);
    }
  },  
  methods: {
    gotoBooks() {
      this.$router.push('/books');
    },
    save(){
      books.newBook(this.book);
      this.$router.push('/books');
    }
  }
}
</script>