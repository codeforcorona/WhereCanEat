<template>
  <div class="flex-col min-w-full items-center justify-center p-6 lg:px-64">
    <span class="p-5"></span>
    <div class="text-center p-6 h-64 bg-teal-300 shadow-lg rounded-lg">
      <h1>Who are we?</h1>
      <p>We aspire to create a food platform that does not discriminate</p>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';

export default {
  data: function () {
    return {
      todo: ''
    }
  },
  components: {
    Logo,
    NavBar
  },
  async created() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      this.todo = res.data;
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
