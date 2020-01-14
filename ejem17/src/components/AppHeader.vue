<template>
  <div>
    <h1 v-if="show">Title</h1>
    <button @click="toggle()">Toggle</button>
  </div>
</template>

<script>
export default {
  name: "app-header",
  data: function(){
    return {
      show: true
    }
  },
  methods: {
    toggle: function(){
      this.show = !this.show;
      this.$emit('shown',this.show);
    }
  }
};
</script>