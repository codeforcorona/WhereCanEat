<template>
    <div class="flex-col min-w-full items-center justify-center p-5 lg:px-64">
        <div class="bg-orange-300 rounded-lg shadow-lg p-20 space-y-5">
<!--contact form hereeee-->
        <form class="w-full max-w-lg">
          <h1 class="text-3xl font-bold">Sign up as a vendor!</h1>
          <span class="p-5"></span>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Samantha Chiew Zhi Cai">
              <p class="text-red-600 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white " id="grid-last-name" type="text" placeholder="sam_kok_zhi@gmail.com">
              <p class="text-red-600 text-xs italic">Please input a valid email address.</p>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="eg. foodNOMNOM98">
              <p class="text-gray-600 text-xs italic">Password must be at least 8 characters long</p>
            </div>
          </div>
          
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Address
              </label>
              <input class="appearance-none block w-full bg-white text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white" id="grid-city" type="text" placeholder="Sheares Hall">
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Area
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Central</option>
                  <option>West</option>
                  <option>East</option>
                  <option>North-East</option>
                  <option>North</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Postal Code
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="119618">
            </div>
          </div>
        </form>
<!--contact form end-->
        </div>
        <span class="p-5"> </span>

<!--
        <div class="bg-orange-300 rounded-lg shadow-lg p-20 space-y-5">
            <h1 class="text-3xl font-bold">Sign up for our newsletter!</h1>
            <div class="flex items-center py-2 bg-gray-200 p-5 rounded-lg hover:bg-white">
                <input type="text" class="focus:outline-none text-2xl" v-model='emailInput'/>
                <button class="flex-shrink-0 bg-orange-500 border-orange-500 text-sm border-4 text-white py-1 px-2 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 text-2xl">
                    Sign Up
                </button>
            </div>
        </div>
-->
        <div class="bg-orange-300 rounded-lg shadow-lg p-20 space-y-5 text-2xl font-semibold text-center">
            <span>
                Follow us on:
                <a class="text-orange-600 hover:underline hover:text-orange-700" href= "https://github.com/codeforcorona/"> Github </a> / 
                <a class="text-orange-600 hover:underline hover:text-orange-700" href= "https://twitter.com/Iacihz_gn/"> Twitter </a> / 
                <a class="text-orange-600 hover:underline hover:text-orange-700" href= "https://www.facebook.com/chiew.kseng/"> Facebook </a> / 
                <a class="text-orange-600 hover:underline hover:text-orange-700" href= "https://www.instagram.com/samansaur/"> Instagram </a>
            </span>
        </div>
        <span class="p-5"></span>



    </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
    data: function() {
        return {
            emailInput: 'Your email here'
        }
    },
    components: {
        NavBar
    }
}
</script>

<style scoped>
input {
    @apply appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight 
}
</style>