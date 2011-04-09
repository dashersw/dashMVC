/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview The View class.
 */
goog.provide('dashMVC.View');
goog.require('dashMVC.Subject');



/**
 * @constructor
 * @extends {dashMVC.Subject}
 * @implements {dashMVC.IObserver}
 */
dashMVC.View = function() {
    goog.base(this);
    /**
     * @type {*}
     * @protected
     */
    this.data;
};
goog.inherits(dashMVC.View, dashMVC.Subject);


/**
 *
 * @param {*} data Data.
 */
dashMVC.View.prototype.setData = function(data) {
    this.data = data;
};


/**
 *
 * @return {*} data Data.
 */
dashMVC.View.prototype.getData = function() {
    return this.data;
};


/**
 * Update
 * @param {dashMVC.ISubject} subject Subject.
 */
dashMVC.View.prototype.update = function(subject) {
    this.data = subject.getX();
};


/**
 * Click function that notifies the observers.
 */
dashMVC.View.prototype.click = function() {
    this.notify();
};
