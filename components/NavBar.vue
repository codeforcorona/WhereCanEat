<template>
    <div class="flex items-center justify-between flex-wrap bg-teal-500 p-6 lg:px-64 shadow-lg">
        <!-- div for logo and name -->
        <div class="flex items-center">
            <img src="" alt="Logo Here">
            <h1 class="font-semibold text-xl tracking-tight">WhereCanEat!</h1>
        </div>
        
        <slot></slot>

        <!-- For other options -->
        <div class="text-lg tracking-wide">
            <nuxt-link 
                to="/" 
                class="p-3 text-teal-300 hover:text-white"
            >
               Home 
            </nuxt-link>
            <nuxt-link 
                to="/about" 
                class="p-3 text-teal-300 hover:text-white"
            >
                About
            </nuxt-link>
            <nuxt-link 
                to="/search" 
                class="p-3 text-teal-300 hover:text-white"
            >
                Search
            </nuxt-link>
            <nuxt-link 
                to="/contactus" 
                class="p-3 text-teal-300 hover:text-white"
            >
                Contact Us
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
</style>