<template>
    <div class="flex items-center justify-between flex-wrap bg-orange-500 p-6 lg:px-64 shadow-lg">
        <!-- div for logo and name -->
        <div class="flex items-center space-x-1">
            <img src="@/assets/images/logo3.svg" alt="Logo">
            <h1 class="font-semibold text-2xl text-red-800 tracking-tight">WhereCanEat!</h1>
        </div>
        
        <slot class="h-auto"></slot>

        <!-- For other options -->
        <div class="hidden md:block text-lg tracking-wide ">
            <nuxt-link 
                to="/" 
                class="p-3 text-orange-200 hover:text-white"
            >
               Home 
            </nuxt-link>
            <nuxt-link 
                to="/about" 
                class="p-3 text-orange-200 hover:text-white"
            >
                About
            </nuxt-link>
            <nuxt-link 
                to="/search" 
                class="p-3 text-orange-200 hover:text-white"
            >
                Search
            </nuxt-link>
            <nuxt-link 
                to="/contactus" 
                class="p-3 text-orange-200 hover:text-white"
            >
                Contact Us
            </nuxt-link>
        </div>

        <div class="block md:hidden">
            <img src="../assets/images/menu3.svg" alt="Menu">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
</style>