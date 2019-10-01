<template>
  <div>
    <h1 :style="titleStyle">Hello!</h1>

    <button @click="toRed()">To Red</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function(){
    return {
      titleStyle: {
        color: "orange",
        "text-decoration": undefined,
        fontStyle: "italic"
      }
    }
  },
  methods: {
    toRed: function(){
      this.titleStyle.color = "red",
      this.titleStyle["text-decoration"] =  "underline",
      this.titleStyle.fontStyle = undefined;
    }
  }
}
</script>