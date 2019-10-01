<template>
  <div>
    <input v-model="input">
    <button @click="addElem()">Añadir</button>
    <ul>
      <li v-for="(elem,i) in elems" :key="elem">
        {{elem}}
        <button @click="removeElem(i)">Borrar</button>
      </li>
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
    },
    removeElem: function(i){
      this.elems.splice(i,1);
    }
  }
};
</script>