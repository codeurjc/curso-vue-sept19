<template>
  <div>
    <h1 :class="titleClass">Hello!</h1>
    <button @click="toRed()">To Red</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function(){
    return {
      titleClass: "orange"
    }
  },
  methods: {
    toRed: function(){
      this.titleClass = "red"
    }
  }
}
</script>

<style scoped>
.orange {
  color: orange;
}
.red {
  color: red;
}
</style>