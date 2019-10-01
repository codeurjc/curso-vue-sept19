<template>
  <div>
    <h1 :class="{ red: isRed }">Hello!</h1>

    <h1 :class="{ red: isRed, underline: isUnderlined }">Hello!</h1>

    <button @click="toRed()">To Red</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function(){
    return {
      isRed: false,
      isUnderlined: false
    }
  },
  methods: {
    toRed: function(){
      this.isRed = true;
      this.isUnderlined = true;
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