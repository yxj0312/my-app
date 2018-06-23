<template>
  <div id="app">
    <!-- <message>Hello There</message>
    <message>Hello There Again</message> -->

    <Counter></Counter>
  </div>
</template>

<script>
// import Message from './components/Message.vue';
import Counter from './components/Counter.vue';


export default {
  name: 'app',
  components: { Counter },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
