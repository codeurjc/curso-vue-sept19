<template>
  <div>
    <app-header @shown="shownTitle($event)"/>
    <p>Main content</p>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: "app",
  components: { 
    AppHeader
  },
  methods:{
    shownTitle: function($event){
      // eslint-disable-next-line
      console.log(`Shown title: ${$event}`)
    }
  }
}
</script>