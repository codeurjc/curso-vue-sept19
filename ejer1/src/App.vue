<template>
  <div>
    <input v-model="input">
    <button id="add-button" @click="addElem()">Añadir</button>
    <ul id="data">
      <li v-for="elem in elems" :key="elem">{{elem}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      input: "",
      elems: []
    }
  },
  methods:{
    addElem: function(){
      this.elems.push(this.input);
      this.input = "";
    }
  }
};
</script>