/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview The Model class.
 */
goog.provide('dashMVC.Model');
goog.require('dashMVC.Subject');



/**
 * @extends {dashMVC.Subject}
 * @constructor
 */
dashMVC.Model = function() {
    goog.base(this);

    /** @protected */
    this.x = 0;
    /** @protected */
    this.y = 0;
};
goog.inherits(dashMVC.Model, dashMVC.Subject);


/**
 * Sets the protected member x to a value.
 * @param {*} x Value to set x to.
 */
dashMVC.Model.prototype.setX = function(x) {
    this.x = x;
    this.notify();
};


/**
 * Returns the protected member x.
 * @return {*} Member x.
 */
dashMVC.Model.prototype.getX = function() {
    return this.x;
};
