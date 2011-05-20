/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview The Model class.
 */
goog.require('app1');
goog.provide('app1.Bus');



/**
 * @extends {dashMVC.Model}
 * @constructor
 */
app1.Bus = function() {
    goog.base(this);

    /** @protected */
    this.x = 0;
    /** @protected */
    this.y = 0;
};
goog.inherits(app1.Bus, dashMVC.Model);




/**
 * Sets the protected member x to a value.
 * @param {*} x Value to set x to.
 */
app1.Bus.prototype.setX = function(x) {
    this.x = x;
    this.notify();
};


/**
 * Returns the protected member x.
 * @return {*} Member x.
 */
app1.Bus.prototype.getX = function() {
    return this.x;
};
