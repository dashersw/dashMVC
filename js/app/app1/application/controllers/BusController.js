/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview The Controller class.
 */
goog.require('app1');
goog.provide('app1.BusController');



/**
 * @constructor
 * @extends {dashMVC.Controller}
 * @param {app1.Bus} model Model that this controller will operate on.
 */
app1.BusController = function(model) {
    /**
     * @protected
     */
    this.model = model;
};
goog.inherits(app1.BusController, dashMVC.Controller);

/**
 *
 * @param {dashMVC.ISubject} subject subject to get data.
 */
app1.BusController.prototype.update = function(subject) {
    this.model.setX(subject.getData() + 1);
};
