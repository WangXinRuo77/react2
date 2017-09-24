import Vue from 'vue';
import Message from '../../src/vue/index.vue';

new Vue({
    el:"#div1",
    template: '<Message/>',
    components: { Message }
})