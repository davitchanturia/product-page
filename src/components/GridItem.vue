<template>
    <div class="w-full lg:w-1/2">
        <div class="w-full lg:w-10/12 lg:px-5 relative">
            <img :src="getActiveFotoPath" alt="" class="lg:rounded-xl w-full h-80 object-cover">
            <div class="hidden lg:flex justify-between items-center mt-8 w-full">
                <div v-for="item in items" :key="item.name" 
                    @click="changeActiveFoto(item)"
                    class="cursor-pointer"
                >
                    <img :src="item.path" :alt="item.name" class="w-14 h-14 rounded-md" />
                </div>
            </div>
            <carousel-navigator which="left">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </carousel-navigator>
            <carousel-navigator which="right">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </carousel-navigator>
        </div>
        
    </div>
</template>

<script>
import CarouselNavigator from './CarouselNavigator.vue';

export default {
    components: { CarouselNavigator },
    data() {
        return {
            items: null
        }
    },
    methods: {
        changeActiveFoto(target){
            this.$store.dispatch('gallery/changeActiveFoto', target);
        }
    },
    computed: {
        getActiveFotoPath() {
            const activeFoto = this.$store.getters['gallery/getActiveItem'];
            return activeFoto.path;
        }
    },
    mounted(){
        this.items = this.$store.getters['gallery/getGalleryItems'];
    }
}
</script>