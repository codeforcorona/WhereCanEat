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
            <button
                @click="isOpen=!isOpen"
                class="p-3 text-orange-200 hover:text-orange-100"
            >
                Cart <span class="text-red-500 font-semibold hover:text-red-600">{{shoppingCart.length}}</span>
            </button>
            <Drawer v-model="isOpen" width="512" title="Your Cart" class="font-lg text-center">
                <Row class="font-bold text-lg">
                    <Col span="14">
                        Item Name
                    </Col>
                    <Col span="4">
                        Quantity 
                    </Col>
                    <Col span="6">
                        Price
                    </Col>
                </Row>
                <Row class="text-lg" v-for="item in nonDupShoppingCart" :key="item.id">
                    <Col span="14">
                        {{item.name}}
                    </Col>
                    <Col span="4">
                        {{cartCount(item.id)}}
                    </Col>
                    <Col span="6">
                        {{price}}
                    </Col>
                </Row>
                <Row class="border-t border-gray-500 mt-1 pt-1 text-lg">
                    <Col span="18" class="font-bold pr-20">
                        Total:
                    </Col>
                    <Col span="6">
                        {{total}}
                    </Col>
                </Row>
            </Drawer>
        </div>

        <div class="block md:hidden">
            <img src="../assets/images/menu3.svg" alt="Menu">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            price: 1.1
        }
    },
    computed: {
        nonDupShoppingCart: {
            get() {
                return Array.from(new Set(this.$store.state.shoppingCart))
            }
        },
        shoppingCart: {
            get() {
                return this.$store.state.shoppingCart
            }
        },
        total: function() {
            return Math.round(this.price * this.shoppingCart.length * 100) / 100
        }
    },
    methods: {
        cartCount: function(compareId) {
            return this.shoppingCart.filter(x => x.id == compareId).length
        },
        addTotal: function(p) {
            this.total += p
        }
    }
}
</script>

<style scoped>
</style>