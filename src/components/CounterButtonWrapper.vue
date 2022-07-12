<template>
    <div v-if="type === 'div'" :class="'flex items-center justify-center ' + classes">
        <slot></slot>
    </div>
    <button v-else :class="classes" @click="triggerAction">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['type', 'which', 'val'],
    computed: {
        classes() {
            const styles = 'w-1/3 py-2 px-4 bg-counterButton';

            if(this.type === 'button'){
                if(this.which === 'first'){
                    return `${styles} + rounded-l text-orange-400`
                }else{
                   return `${styles} + rounded-r text-orange-400`
                }
            }else{
                return styles
            }
        }
    },
    methods: {
        triggerAction() {
            this.$emit('trigger-action', this.val);
        }
    }
}
</script>