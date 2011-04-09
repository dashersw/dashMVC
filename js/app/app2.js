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

var view1 = new dashMVC.View();
var view2 = new dashMVC.View();
var model = new dashMVC.Model();
var controller1 = new dashMVC.Controller(model);
var controller2 = new dashMVC.Controller(model);

view1.attach(controller1);
view2.attach(controller2);

model.attach(view1);
model.attach(view2);

model.setX(42);
console.log(view1.getData(), view2.getData());

view1.click();
console.log(view1.getData(), view2.getData());

view2.click();
console.log(view1.getData(), view2.getData());
