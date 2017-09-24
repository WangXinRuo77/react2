import Vue from 'vue';
import Message from '../../src/vue/index.vue';

new Vue({
    el:"#div1",
    render: h =>h(Message)
})