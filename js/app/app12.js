/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview First application.
 */

goog.require('dashMVC');
goog.provide('app12');

var aview = new dashMVC.View();
var amodel = new dashMVC.Model();
var acontroller = new dashMVC.Controller(amodel);

aview.attach(acontroller);
amodel.attach(aview);

amodel.setX(42);

console.log(aview.getData());

aview.click();

console.log(aview.getData());
console.dir(amodel);
