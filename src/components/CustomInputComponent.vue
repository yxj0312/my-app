<template>
    <div>
        <!-- v-model is a syntax sugar. it equals to :value="coupon" @input="coupon = $event.target.value" -->
        <input type="text" v-model="coupon">

        <!-- custom input -->
        <CustomInputWithin v-model="coupon2"></CustomInputWithin>
    </div>
</template>

<script>
    import CustomInputWithin from './CustomInputWithin.vue';

    export default {
        props: [],

        components: {CustomInputWithin},

        data() {
            return {
                coupon:'FREEBIE',
                coupon2:'FREEBIE'
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>