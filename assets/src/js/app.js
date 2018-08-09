// Styles
import './../scss/login.scss';
import './../scss/style.scss';



// jQuery
import 'slick-carousel';

$(document).ready(function() {

    $('.js-slider').slick();

});



//Vue
import Vue from 'vue';
import vapp from './App.vue';

var app2 = new Vue({
    el: '.content',
    components: {
        vapp
    }
});

