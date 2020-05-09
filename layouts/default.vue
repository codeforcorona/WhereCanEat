<template>
  <div class="flex flex-col h-screen justify-between">
    <NavBar />
    <nuxt />
    <footer><Footer/></footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default {
  components: { 
    NavBar,
    Footer
  }
}
</script>

<style scoped>
</style>
