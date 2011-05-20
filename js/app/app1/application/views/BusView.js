/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview The View class.
 */
goog.require('app1');
goog.provide('app1.BusView');



/**
 * @constructor
 * @extends {dashMVC.View}
 * @implements {dashMVC.IObserver}
 */
app1.BusView = function() {
    goog.base(this);
    /**
     * @type {*}
     * @protected
     */
    this.data;
};
goog.inherits(app1.BusView, dashMVC.View);


/**
 *
 * @param {*} data Data.
 */
app1.BusView.prototype.setData = function(data) {
    this.data = data;
};


/**
 *
 * @return {*} data Data.
 */
app1.BusView.prototype.getData = function() {
    return this.data;
};


/**
 * Update
 * @param {dashMVC.ISubject} subject Subject.
 */
app1.BusView.prototype.update = function(subject) {
    this.data = subject.getX();
};


/**
 * Click function that notifies the observers.
 */
app1.BusView.prototype.click = function() {
    this.notify();
};
