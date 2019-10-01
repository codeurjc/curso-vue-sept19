<template>
  <div>
    <input type="text" v-model="name">
    <h1>Hello {{name}}!</h1>
    <button @click="setName('John')">Hello John</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      name: "Anybody"
    }
  },
  methods:{
    setName: function(name){
      this.name = name;
    }
  }
};
</script>