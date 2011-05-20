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
};
goog.inherits(dashMVC.Model, dashMVC.Subject);
