<template>
  <div>
    <h1 :class="titleStyle">Hello!</h1>

    <button @click="toRed()">To Red</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function(){
    return {
      titleStyle: {
        red: false,
        underline: false
      }
    }
  },
  methods: {
    toRed: function(){
      this.titleStyle.red = true;
      this.titleStyle.underline = true;
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
}
.underline {
  text-decoration: underline;
}
</style>