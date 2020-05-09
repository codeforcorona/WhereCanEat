<template>
  <div class="flex flex-col h-screen justify-between">
    <nuxt />
    <footer><Footer/></footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  components: {
    Footer
  }
}
</script>

<style>
</style>
