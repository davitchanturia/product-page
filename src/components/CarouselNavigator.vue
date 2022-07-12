<template>
    <button v-if="windowSize" :class="classes" @click="triggerAction">
        <slot></slot>
    </button>
</template>

<script>
import { toRaw } from 'vue';

export default {
    props: ['which'],
    computed: {
        classes() {
            const styles = 'absolute top-1/2 bg-gray-200 p-2 rounded-3xl text-xl';

            if(this.which === 'left') {
                return `${styles} left-5`;
            }else{
                return `${styles} right-5`
            }

        },
        windowSize() {
            if(window.innerWidth < 1024){
                return true;
            }else{
                return false;
            }
        }
    },
    methods: {
        triggerAction() {
            const items = this.$store.getters['gallery/getGalleryItems'];
            const convertedItems = toRaw(items);

            const activeItem = this.$store.getters['gallery/getActiveItem'];
            const convertedActiveItem = toRaw(activeItem);

            const firstElement = convertedItems[0];
            const lastElement = convertedItems[convertedItems.length - 1];

            const firstElementIndex = convertedItems.findIndex(object => {
              return object.name === firstElement.name;
            });

            const lastElementIndex = convertedItems.findIndex(object => {
              return object.name === lastElement.name;
            });

            //გავარკვიოთ აქტიურის ინდექსი
            const activeItemIndex = convertedItems.findIndex(object => {
              return object.name === convertedActiveItem.name;
            });

            console.log(activeItemIndex);
            //თუ აქტიური ელემენტი არის ბოლო მაშინ აქტიურის სტატუსი მივანიჭოთ პირველს
            if(this.which === 'right' && activeItemIndex === lastElementIndex) {
                this.$store.dispatch('gallery/changeActiveFoto', firstElement);
                return;
            }
            if(this.which === 'left' && activeItemIndex === firstElementIndex) {
                this.$store.dispatch('gallery/changeActiveFoto', lastElement);
                return;
            }

            //გავარკვიოთ მომდევნო ელემენტის ინდექსი
            const nextElementIndex = activeItemIndex + 1;

            //გავარკვიოთ წინა ელემენტის ინდექსი
            const previousElementIndex = activeItemIndex - 1;

            //მოვძებნოთ შემდეგი ელემენტი
            const nextElement = convertedItems.find((e, index) => index === nextElementIndex );
            const previousElement = convertedItems.find((e, index) => index === previousElementIndex );

            //მივანიჭოთ მომდევნოს აქტიურის სტატუსი ინდექსის მიხედვით
            if(this.which === 'right'){
                this.$store.dispatch('gallery/changeActiveFoto', nextElement)
            }else{
                this.$store.dispatch('gallery/changeActiveFoto', previousElement)
            }
        }
    }
}
</script>