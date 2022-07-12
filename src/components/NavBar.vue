<template>
    <nav class="w-full">
        <div class="px-3 md:px-0 py-5 w-full md:w-2/3 mx-auto flex justify-between items-center border-b">
            <div class="flex justify-around items-center">
                <div class="inline-block sm:hidden mr-3" @click="showResponsiveMenu">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <h1 class="font-bold text-2xl text-darkText">Sneakers</h1>
                <div class="hidden sm:inline-block">
                    <nav-list></nav-list>
                </div>
            </div>
            <div class="flex justify-around items-center">
                <div class="relative">
                    <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span v-if="counter" class="absolute -top-2 -right-2 w-4 h-4 flex justify-center items-center text-minimum p-1 bg-orange-400 rounded-xl">
                        {{ counter }}
                    </span>
                </div>
                <img class="w-7 h-7 ml-6 rounded-2xl" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" alt="">
            </div>
        </div>
    </nav>
</template>

<script>
import NavList from './NavList.vue';
export default {
    components: {
        NavList
    },
    computed: {
        CounterExists() {
            return this.$store.getters['counter/counterExists'];
        },
        counter() {
            return this.$store.getters['counter/getCounter'];
        }
    },
    methods: {
        showResponsiveMenu() {
            this.$store.dispatch('menu/show', true);
        }
    }
}
</script>