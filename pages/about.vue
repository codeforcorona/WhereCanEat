<template>
    <div class="flex-col min-w-full items-center justify-center p-5 lg:px-64">
        <div class="flex-wrap text-center justify-center md:justify-start md:text-left md:flex pb-20 bg-orange-300 shadow-lg rounded-lg items-center content-center">
          <img src="@/assets/images/food6.jpeg"  class="w-full h-64 object-cover rounded-t-lg" alt="food-image"/>
          <div class="pl-20">
            <h1 class="font-bold text-xl md:text-5xl">Who are we?</h1>
            <p class='font-serif text-lg md:text-2xl'>
              <span class="font-bold text-xl md:text-4xl font-sans">WhereCanEat!</span> 
              is created by 3 NUS students aspiring to create an integrated food delivery platform. Dedicated to helping you find the best and most value-for-money food merchants around, we wanted to show all the food delivery options in one place: a simpler alternative to the various food delivery options that make ordering food much more complicated than it should be.
            </p>
          </div>
        </div>
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