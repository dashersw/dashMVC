/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview The View class.
 */
goog.require('app1.Bus');
goog.require('app1.BusView');
goog.require('app1.BusController');
goog.provide('appCode');

var aview = new app1.BusView();
var amodel = new app1.Bus();
var acontroller = new app1.BusController(amodel);

aview.attach(acontroller);
amodel.attach(aview);

amodel.setX(42);

console.log(aview.getData());

aview.click();

console.log(aview.getData());
console.dir(amodel);
