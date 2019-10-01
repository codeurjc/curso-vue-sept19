<template>
  <div>
    <app-header title="Title!!"/>
    <p>Main content</p>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: "app",
  components: { 
    AppHeader
  }
}
</script>