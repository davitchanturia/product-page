<template>
    <div class="flex justify-between flex-col xl:flex-row items-center mt-5">
        <div class="flex w-full xl:w-36">
            <counter-button-wrapper type="button" which="first" val="-" @trigger-action="changeCounter">-</counter-button-wrapper>
            <counter-button-wrapper type="div" which="second">{{ counter }}</counter-button-wrapper>
            <counter-button-wrapper type="button" which="third" val="+" @trigger-action="changeCounter">+</counter-button-wrapper>
        </div>
        <button class="w-full xl:w-auto  bg-orange-400 text-white rounded px-20 py-3 mt-5 xl:mt-0">
            <div class="w-44 xl:w-auto mx-auto flex items-center justify-evenly">
                <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p class="ml-2 text-sm">Add to cart</p>
            </div>
        </button>
    </div>
</template>

<script>
import CounterButtonWrapper from './CounterButtonWrapper.vue';
export default {
    components: { CounterButtonWrapper },
    computed: {
        counter() {
            return this.$store.getters['counter/getCounter'];
        }
    },
    methods: {
        changeCounter(val) {
            if(val === '+'){
                this.$store.dispatch('counter/changeCounterInc');
            }
            if(val === '-'){
                this.$store.dispatch('counter/changeCounterDesc');
            }
        }
    }
}
</script>