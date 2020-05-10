<template>
  <div class="flex-col min-w-full items-center justify-center p-5 lg:px-64">
    <div class="flex-wrap text-center justify-center md:justify-start md:text-left md:flex p-20 bg-orange-300 shadow-lg rounded-lg items-center content-center">
      <img src="@/assets/images/cover1.jpg" style="display:flex;justify-content:center;" class="w-64 h-64 object-cover rounded-full" alt="food-image"/>
      <div class="mx-auto">
        <h1 class="font-bold text-xl md:text-5xl">What would you like today?</h1>
          <div class="flex items-center py-2 bg-gray-200 p-5 rounded-lg hover:bg-white mb-5">

              <!-- Location input  -->
              <input type="text" class="focus:outline-none text-2xl" v-model='postalCode'/>

              <!-- Geolocation button -->
              <svg class="fill-current hover:text-red-700 text-orange-500 h-16 w-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>

              <!-- Onclick need to send data to postalCode -->
              <nuxt-link to='/search' class="flex-shrink-0 bg-orange-500 border-orange-500 text-sm border-4 text-white py-1 px-2 rounded-lg hover:bg-orange-600 hover:text-gray-100 hover:border-orange-600 text-2xl">
                  Find Food
              </nuxt-link>

          </div>
        <div class="block flex-wrap md:flex">
          <!-- Onclick needs to send data on takeaway--> 
          <nuxt-link to="/search" v-on:click.native="set_takeaway" class="rounded-lg text-4xl font-semibold bg-orange-500 shadow-md p-5 text-white hover:bg-orange-600 hover:text-gray-100 hover:border-orange-600">Order Takeaway</nuxt-link>
          <span class="px-3"></span>
          <!-- Onclick needs to send data on takeaway / delivery -->
          <nuxt-link to="/search" v-on:click.native="set_delivery" class="rounded-lg text-4xl font-semibold bg-orange-500 shadow-md p-5 text-white hover:bg-orange-600 hover:text-gray-100 hover:border-orange-600">Order Delivery</nuxt-link>
        </div>
      </div>
    </div>
    <span class="p-5"></span>
    <div class="flex p-20 bg-orange-300 shadow-lg rounded-lg items-center justify-center text-center">
      <div class="space-x-5 space-y-5">
        <h1 class="font-bold text-5xl text-center">Start selling with us today!</h1>
        <button class="bg-orange-500 hover:bg-orange-600 hover:border hover:border-orange-600 text-white text-4xl rounded-lg p-5 font-bold pt-5">
          Login
        </button>
        <button class="bg-orange-500 hover:bg-orange-600 hover:border hover:border-orange-600 text-white text-4xl rounded-lg p-5 font-bold pt-5">
          Sign Up
        </button>
      </div>
    </div>
    <span class="p-5"></span>
    <div class="flex p-20 bg-orange-300 shadow-lg rounded-lg items-center justify-center text-center">
      <div class="space-x-5 space-y-5">
        <h1 class="font-bold text-5xl text-center">Start selling with us today!</h1>
        <button class="bg-orange-500 hover:bg-orange-600 hover:border hover:border-orange-600 text-white text-4xl rounded-lg p-5 font-bold pt-5">
          Login
        </button>
        <button class="bg-orange-500 hover:bg-orange-600 hover:border hover:border-orange-600 text-white text-4xl rounded-lg p-5 font-bold pt-5">
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
      todo: '',
    }
  },
  computed: {
    postalCode: {
      get () {
        return this.$store.state.postalCode
      },
      set (value) {
        this.$store.commit('set_postalCode', value)
      }
    }
  },
  methods: {
    set_delivery: function() {
      this.$store.commit('set_orderType', 'Delivery')
      console.log("set_delivery triggered")
    },
    set_takeaway: function() {
      this.$store.commit('set_orderType', 'Takeaway')
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
input {
    @apply appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight 
}
</style>
