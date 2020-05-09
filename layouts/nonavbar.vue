<template>
  <div class="flex flex-col h-screen justify-between">
    <nuxt />
    <footer class="h-10"><Footer class="h-10"/></footer>
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
