<template>
    <div class="w-full lg:w-1/2 p-5 lg:py-10">
        <div>
            <h4 class="text-orange-400 text-xs font-semibold">SNEAKER COMPANY</h4>
            <h1 class="mt-4 text-4xl text-darkText">Fall Limited Edition <br>Sneakers</h1>
            <p class="mt-5 text-sm text-paragraphColor">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestiae alias, magnam dolores cum assumenda iure impedit dolorum quis consequuntur sed, itaque nihil quos eius?</p>
        </div>
        <div class="flex justify-between items-center xl:items-start flex-row xl:flex-col">  
            <div class="mt-4 flex justify-start items-center">
                <h2 class="text-darkText font-semibold text-xl">$125.00</h2>
                <span class="ml-2 bg-saleBackground text-saleColor px-1 rounded">50%</span>
            </div>
            <div class="flex justify-center items-center">
                <p class="text-sm text-paragraphColor line-through">$250</p>
            </div>
        </div>
        <counter-bar></counter-bar>
    </div>
</template>

<script>
import CounterBar from './CounterBar.vue';

export default {
    components: {
        CounterBar
    }
}
</script>