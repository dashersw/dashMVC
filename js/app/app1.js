/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview First application.
 */

goog.require('dashMVC');
goog.provide('app1');

var view = new dashMVC.View();
var model = new dashMVC.Model();
var controller = new dashMVC.Controller(model);

view.attach(controller);
model.attach(view);

model.setX(42);

console.log(view.getData());

view.click();

console.log(view.getData());
console.dir(model);
