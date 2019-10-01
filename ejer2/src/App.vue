<template>
  <div>
    <input v-model="input">
    <button @click="addElem()">Añadir</button>
    <ul>
      <li v-for="elem in elems" :key="elem.id">
        <input type="checkbox" v-model="elem.checked">
        <span :class="{ tachado: elem.checked }">{{elem.desc}}</span>
        <button @click="removeElem(elem.id)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script>

let nextId = 0;

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

<style scoped>
.tachado {
  text-decoration: line-through;
}
</style>