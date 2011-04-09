/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview Second application.
 */

goog.require('dashMVC');
goog.provide('app2');

var bview1 = new dashMVC.View();
var bview2 = new dashMVC.View();
var bmodel = new dashMVC.Model();
var bcontroller1 = new dashMVC.Controller(bmodel);
var bcontroller2 = new dashMVC.Controller(bmodel);

bview1.attach(bcontroller1);
bview2.attach(bcontroller2);

bmodel.attach(bview1);
bmodel.attach(bview2);

bmodel.setX(42);
console.log(bview1.getData(), bview2.getData());

bview1.click();
console.log(bview1.getData(), bview2.getData());

bview2.click();
console.log(bview1.getData(), bview2.getData());
