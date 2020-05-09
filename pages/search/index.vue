<template>
    <div class="container">
        <Nav-Bar>
            <div class="flex w-1/3 items-center border-b border-b-2 border-teal-500 bg-gray-200 rounded p-2 hover:bg-white">
                <input v-model="searchText"/>
                <button type="button">
                    Search
                </button>
            </div>
        </Nav-Bar>
        <div class="lg:px-64 p-6">
            <div class="bg-gray-200 rounded-lg shadow-lg p-5">
                <div class='text-lg'>
                    <select class="appearance-none bg-gray-300 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 px-2" id="grid-state" v-model="cuisine">
                        <option>Filter Cuisine</option>
                        <option>Chinese</option>
                        <option>Italian</option>
                        <option>Indian</option>
                    </select>
                    <select class="appearance-none bg-gray-300 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 px-2" id="grid-state" v-model="filter">
                        <option>Filter</option>
                        <option>Other Filter here</option>
                    </select>
                    <select class="appearance-none bg-gray-300 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 px-2" id="grid-state" v-model="sort">
                        <option>Sort by</option>
                        <option>Name</option>
                        <option>Price</option>
                        <option>Type</option>
                    </select>
                </div>
            </div>
            <span class="p-5"></span>
            <div class="md:flex md:flex-wrap justify-center p-10 shadow-lg rounded-lg bg-gray-200">
                <div class='p-2 px-2' v-for="outlet in outlets" :key="outlet.id">
                    <Card shadow :bordered="false" class="p-2">
                        <div>
                            <p slot="title" class="border-b border-gray-500">
                                <img src="@/assets/images/food2.jpeg" class="object-cover h-32 w-32" alt="Outlet image here">
                                <span>
                                    {{outlet.name}}, {{outlet.cuisine}}
                                </span>
                            </p>
                            <p class="p-3 flex-wrap w-32">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </p>
                            <Button type="primary" class="pt-2">
                                Order Now!
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import axois from '@nuxtjs/axios';

export default {
    data: function() {
        return {
            searchText: 'Search for your favourite food!',
            foodItems: [],
            cuisine: 'Filter Cuisine',
            filter: 'Filter',
            sort: 'Sort by',
            outlets: [
                {
                    id: 1,
                    name: 'Outlet 1',
                    cuisine: 'Indian'
                },
                {
                    id: 2,
                    name: 'Outlet 2',
                    cuisine: 'Chinese'
                },
                {
                    id: 3,
                    name: 'Outlet 3',
                    cuisine: 'Indian'
                },
                {
                    id: 4,
                    name: 'Outlet 4',
                    cuisine: 'Chinese'
                },
                {
                    id:5,
                    name: 'Outlet 5',
                    cuisine: 'Indian'
                },
                {
                    id: 6,
                    name: 'Outlet 6',
                    cuisine: 'Chinese'
                },
                {
                    id: 7,
                    name: 'Outlet 7',
                    cuisine: 'Indian'
                },
                {
                    id: 8,
                    name: 'Outlet 8',
                    cuisine: 'Chinese'
                }
            ]
        }
    },
    components: {
        NavBar
    },
    layout: 'nonavbar'
}
</script>

<style scoped>
.container {
    @apply mx-auto text-center justify-center min-w-full
}

input {
    @apply appearance-none bg-transparent text-xl border-none w-full text-gray-700 mr-3 px-2 leading-tight
}

button {
    @apply flex-shrink-0 bg-teal-500 border-teal-500 text-sm border-4 text-white py-1 px-2 rounded
}
</style>

