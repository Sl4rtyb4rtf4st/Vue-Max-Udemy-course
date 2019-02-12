import Vue from 'vue';

export const EventBus = new Vue({
    data: {
        quoteNumber: 0
    },
    watcher: {
        quoteNumber: function() {
            console.log(quoteNumber);
        }
    }
});