<template>
  <div>
    <input type="checkbox" v-model="elem.checked" />
    <span :class="{ tachado: elem.checked }">{{elem.desc}}</span>
    <button @click="removeElem()">Borrar</button>
  </div>
</template>

<script>
export default {
    name:"app-elem",
    props: ["elem"],
    methods:{
      removeElem: function() {
        this.$emit('deleted');
      }
    }
}
</script>

<style scoped>
.tachado {
  text-decoration: line-through;
}
</style>