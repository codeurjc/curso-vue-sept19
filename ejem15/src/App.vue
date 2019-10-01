<template>
  <div>
    <app-header/>
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