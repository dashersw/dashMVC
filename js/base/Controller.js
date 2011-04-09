/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview The Controller class.
 */

goog.provide('dashMVC.Controller');
goog.require('dashMVC.IObserver');



/**
 * @constructor
 * @implements {dashMVC.IObserver}
 * @param {dashMVC.Model} model Model that this controller will operate on.
 */
dashMVC.Controller = function(model) {
    /**
     * @type {dashMVC.Model}
     * @protected
     */
    this.model = model;
};


/**
 *
 * @param {dashMVC.ISubject} subject subject to get data.
 */
dashMVC.Controller.prototype.update = function(subject) {
    this.model.setX(subject.getData() + 1);
};
