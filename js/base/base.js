/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview This file combines the requirements of dashMVC in a single requirement called dashMVC so that
 * projects that use the dashMVC need only require dashMVC.
 */

goog.require('dashMVC.Controller');
goog.require('dashMVC.Model');
goog.require('dashMVC.View');
goog.require('dashMVC.uriRouter');
goog.require('goog.History');
goog.provide('dashMVC');



dashMVC.history = new goog.History(false);

/**
 * TODO: this path should be changed, or can be set from a parameter from server
 */
dashMVC.uriRouter.setBasePath('/github/dashMVC/');

dashMVC.history.callback = function(e) {
    dashMVC.uriRouter.init();
}

goog.events.listen(dashMVC.history, goog.history.EventType.NAVIGATE, dashMVC.history.callback);
dashMVC.history.setEnabled(true);
