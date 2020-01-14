<template>
  <div>
    <input v-model="input">
    <button @click="addElem()">Añadir</button>
    <ul>
      <li v-for="elem in elems" :key="elem.id">
        <app-elem :elem="elem" @deleted="removeElem(elem.id)"/>
      </li>
    </ul>
  </div>
</template>

<script>

import AppElem from './components/Elem.vue';

let nextId = 0;

export default {
  name: "app",
  components: {
    AppElem
  },
  data: () => {
    return {
      input: "",
      elems: []
    }
  },
  methods:{
    addElem: function(){
      this.elems.push({ 
        id: nextId, 
        desc: this.input, 
        checked: false
      });
      nextId++;
      this.input = "";
    },
    removeElem: function(id){
      let index = this.elems.findIndex(elem => elem.id === id);
      if(index !== -1){
        this.elems.splice(index,1);
      }
    }
  }
};
</script>