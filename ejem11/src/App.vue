<template>
  <div>
    <h1 :class="[color, decoration]">Hello!</h1>

    <button @click="toRed()">To Red</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function(){
    return {
      color: "orange",
      decoration: "italic"
    }
  },
  methods: {
    toRed: function(){
      this.color = "red",
      this.decoration = "underline"
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
.orange {
  color: orange;
}
.italic {
  font-style: italic;
}
</style>