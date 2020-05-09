<template>
  <div class="flex-col min-w-full items-center justify-center p-5 lg:px-64">
    <div class="flex-wrap text-center justify-center md:justify-start md:text-left md:flex p-20 bg-teal-300 shadow-lg rounded-lg items-center content-center">
      <img src="@/assets/images/cover1.jpg"  class="w-64 h-64 object-cover rounded-full" alt="food-image"/>
      <div class="mx-auto">
        <h1 class="font-bold text-xl md:text-5xl py-5">What would you like today?</h1>
        <nuxt-link to="/search" class="flex-wrap rounded-lg text-4xl font-semibold bg-teal-500 shadow-md p-5 text-white">Order Takeaway</nuxt-link>
        <span class="px-3"></span>
        <nuxt-link to="/search" class="flex-wrap rounded-lg text-4xl font-semibold bg-teal-500 shadow-md p-5 text-white">Order Delivery</nuxt-link>
      </div>
    </div>
    <span class="p-5"></span>
    <div class="flex p-20 bg-teal-300 shadow-lg rounded-lg items-center justify-center text-center">
      <div class="space-x-5 space-y-5">
        <h1 class="font-bold text-5xl text-center">Start selling with us today!</h1>
        <button class="bg-teal-500 hover:bg-transparent hover:border hover:border-teal-500 text-white text-4xl rounded-lg p-5 font-bold pt-5">
          Login
        </button>
        <button class="bg-teal-500 hover:bg-transparent hover:border hover:border-teal-500 text-white text-4xl rounded-lg p-5 font-bold pt-5">
          Sign Up
        </button>
      </div>
    </div>
    <span class="p-5"></span>
    <div class="flex p-20 bg-teal-300 shadow-lg rounded-lg items-center justify-center text-center">
      <div class="space-x-5 space-y-5">
        <h1 class="font-bold text-5xl text-center">Start selling with us today!</h1>
        <button class="bg-teal-500 hover:bg-transparent hover:border hover:border-teal-500 text-white text-4xl rounded-lg p-5 font-bold pt-5">
          Login
        </button>
        <button class="bg-teal-500 hover:bg-transparent hover:border hover:border-teal-500 text-white text-4xl rounded-lg p-5 font-bold pt-5">
          Sign Up
        </button>
      </div>
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
