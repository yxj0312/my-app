<template>
  <div id="app">
    <!-- <message>Hello There</message>
    <message>Hello There Again</message> -->

    <!-- <Counter></Counter> -->
    <CustomInputComponent></CustomInputComponent>
  </div>
</template>

<script>
// import Message from './components/Message.vue';
import Counter from './components/Counter.vue';
import CustomInputComponent from './components/CustomInputComponent.vue';


export default {
  name: 'app',
  components: { Counter, CustomInputComponent },
  data () {
    return {
    }
  }
}
</script>
