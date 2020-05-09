<template>
    <div class="flex-col min-w-full items-center justify-center p-5 lg:px-64">
        <div class="flex-wrap text-center justify-center md:justify-start md:text-left md:flex p-20 bg-orange-300 shadow-lg rounded-lg items-center content-center">
          <img src="@/assets/images/cover1.jpg"  class="w-64 h-64 object-cover rounded-full" alt="food-image"/>
          <div class="pl-20">
            <h1 class="font-bold text-xl md:text-5xl">Who are we?</h1>
            <p class='font-serif text-lg md:text-2xl'><span class="font-bold text-xl md:text-4xl font-sans">WhereCanEat!</span> aspires to create a food platform that does not discriminate</p>
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