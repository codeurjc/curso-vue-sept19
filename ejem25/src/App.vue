<template>
  <div>
    <input v-model="input" />
    <button @click="search()">Search</button>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="elem in elems" :key="elem">{{elem}}</li>
    </ul>
  </div>
</template>

<script>
import * as axios from "axios";

async function loadBookTitles(title) {
  let result = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title
  );

  let titles = [];
  for (let book of result.data.items) {
    titles.push(book.volumeInfo.title);
  }
  return titles;
}

export default {
  name: "app",
  data: () => {
    return {
      input: "",
      elems: [],
      loading: false
    };
  },
  methods: {
    search: async function() {
      this.loading = true;
      this.elems = await loadBookTitles(this.input);
      this.loading = false;

      this.input = "";
    }
  }
};
</script>