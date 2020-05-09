<template>
  <div class="flex flex-col h-screen justify-between">
    <NavBar />
    <nuxt />
    <footer></footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  components: { 
    NavBar
  }
}
</script>

<style scoped>
</style>
