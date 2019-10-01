<template>
  <div>
    <h1>Hello {{name}}!</h1>
    <img v-bind:src="imgUrl"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      name: 'Anybody',
      imgUrl: 'img.png'
    }
  }
}
</script>