import { say, type } from './a.js'
let says = say()
console.log(`The ${type} says ${says}`);

var $ = require('jquery');
console.log($);
$(function () {
    $('body').html('Hello2');
});
