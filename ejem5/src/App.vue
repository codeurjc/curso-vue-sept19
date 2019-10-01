<template>
  <div>
    <h1>Hello {{name}}</h1>
    <h1>Hello Upper {{upperName}}</h1>
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
  computed: {
    upperName: function(){
      return this.name.toUpperCase();
    }
  },
  methods:{
    setName: function(name){
      this.name = name;
    }
  }
};
</script>