<template>
    <input type="text" 
    @input="updateCode($event.target.value)"
    ref="input"
    >
</template>

<script>
    export default {
        props: ['value'],

        data() {
            return {
                invalids: ['ALLFREE']
            }
        },

        methods: {
            updateCode(code) {

                if (this.invalids.includes(code)) {
                    alert('This coupon is no longer valid. Sorry!');

                    this.$refs.input.value = code = '';
                }

                this.$emit('input', code);
            }
        }
    }
</script>