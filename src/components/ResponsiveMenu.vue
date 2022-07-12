<template>
    <div :class="isVisible">
        <div class="relative">
            <button class="absolute top-3 right-3" @click="closeMenu">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <nav-list></nav-list>
    </div>
</template>

<script>
import NavList from './NavList.vue';

export default {
    components: {
        NavList
    },
    computed: {
        isVisible() {
            const showStatus = this.$store.getters['menu/show'];
            const classes = "absolute top-0 -left-full duration-700 w-full h-full bg-orange-500 z-10";

            if(showStatus === true) {
                return `${classes} translate-x-full`
            }else{
                return `${classes} -translate-x-full`
            }
        }
    },
    methods: {
        closeMenu() {
            this.$store.dispatch('menu/show', false);
        }
    }
}
</script>