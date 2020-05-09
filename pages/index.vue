<template>
  <div class="container">
    <h1>This is index.vue</h1>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto bg-teal-200 min-w-full;
}
</style>
