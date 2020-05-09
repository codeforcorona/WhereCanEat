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
        <div class="flex lg:px-32 p-6">
            <div class="bg-teal-300 rounded-lg shadow-lg p-5">
                <div class='flex-col text-lg space-y-5'>
                      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-md" type="text" v-model="postalCode"/>
                        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                            Search
                        </button>
                    </div>
                    <div class="flex-col bg-gray-200 hover:bg-gray-100 focus:bg-white p-3 rounded-md">
                        <label for="Price Range">Price Range</label>
                        <Slider v-model="priceRange" range></Slider>
                    </div>
                    <select class="block appearance-none bg-gray-200 hover:bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 px-2" id="grid-state" v-model="orderType">
                        <option>Order Type</option>
                        <option>Takeaway</option>
                        <option>Delivery</option>
                    </select>
                    <select class="block appearance-none bg-gray-200 hover:bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 px-2" id="grid-state" v-model="cuisine">
                        <option>Filter Cuisine</option>
                        <option>Chinese</option>
                        <option>Italian</option>
                        <option>Indian</option>
                    </select>
                    <select class="block appearance-none bg-gray-200 hover:bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 px-2" id="grid-state" v-model="filter">
                        <option>Filter</option>
                        <option>Other Filter here</option>
                    </select>
                    <select class="block appearance-none bg-gray-200 hover:bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 px-2" id="grid-state" v-model="sort">
                        <option>Sort by</option>
                        <option>Name</option>
                        <option>Price</option>
                        <option>Type</option>
                    </select>
                </div>
            </div>
            <span class="p-5"></span>
            <div class="md:flex md:flex-wrap justify-center p-10 shadow-lg rounded-lg bg-teal-300">
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
                            <Button type="primary" class="pt-2" @click="order(outlet)">
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
    methods: {
        order: function(outlet) {
            this.$store.commit('add_to_cart', outlet)
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
        },
        searchText: {
            get() {
                return this.$store.state.searchText
            },
            set (value) {
                this.$store.commit('set_searchText', value)
            }
        },
        cuisine: {
            get () {
                return this.$store.state.cuisine
            },
            set (value) {
                this.$store.commit('set_cuisine', value)
            }
        },
        filter: {
            get () {
                return this.$store.state.filter
            },
            set (value) {
                this.$store.commit('set_filter', value)
            }
        },
        orderType: {
            get () {
                return this.$store.state.orderType
            },
            set (value) {
                this.$store.commit('set_orderType', value)
            }
        },
        sort: {
            get () {
                return this.$store.state.sort
            },
            set (value) {
                this.$store.commit('set_sortBy', value)
            }
        },
        priceRange: {
            get () {
                return this.$store.state.priceRange
            },
            set (value) {
                this.$store.commit('set_priceRange', value)
            }
        },
        outlets: {
            get () {
                return this.$store.state.outlets
            }
        }        
    },
    components: {
        NavBar
    },
    layout: 'nonavbar',
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

