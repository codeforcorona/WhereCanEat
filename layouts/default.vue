<template>
  <div class="relative min-h-screen">
    <NavBar />
    <nuxt />
    <Footer class="absolute inset-x-0 bottom-0 h-8"/>
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
