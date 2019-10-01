<template>
  <div>
    <h1 :style="{ color: color }">Hello!</h1>

    <button @click="toRed()">To Red</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function(){
    return {
      color: "orange"
    }
  },
  methods: {
    toRed: function(){
      this.color = "red"
    }
  }
}
</script>