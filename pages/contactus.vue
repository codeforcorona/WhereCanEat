<template>
    <div class="flex-col min-w-full items-center justify-center p-5 lg:px-64">
        <div class="bg-teal-300 rounded-lg shadow-lg p-20 space-y-5">
            <h1 class="text-3xl font-bold">Sign up for our newsletter!</h1>
            <div class="flex items-center py-2 bg-gray-200 p-5 rounded-lg hover:bg-white">
                <input type="text" class="focus:outline-none text-2xl" v-model='emailInput'/>
                <button class="flex-shrink-0 bg-teal-500 border-teal-500 text-sm border-4 text-white py-1 px-2 rounded-lg hover:bg-white hover:text-teal-500 hover:border-teal-700 text-2xl">
                    Sign Up
                </button>
            </div>
        </div>
        <span class="p-5"></span>
        <div class="bg-teal-300 rounded-lg shadow-lg p-20 space-y-5 text-2xl font-semibold text-center">
            <span>Github / Twitter / Facebook / Instagram</span>
        </div>
        <span class="p-5"></span>
        <div class="bg-teal-300 rounded-lg shadow-lg p-20 space-y-5">
            Contact Form here
        </div>
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
    @apply appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight 
}
</style>