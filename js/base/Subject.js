/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview This class serves as the base class for the ISubject interface.
 */
goog.provide('dashMVC.Subject');
goog.require('dashMVC.ISubject');
goog.require('goog.array');



/**
 * @constructor
 * @implements {dashMVC.ISubject}
 */
dashMVC.Subject = function() {
    /**
     * @type {Array.<dashMVC.IObserver>}
     * @protected
     */
    this.observers = [];
};


/**
 *
 * @param {dashMVC.IObserver} observer Observer.
 */
dashMVC.Subject.prototype.attach = function(observer) {
    goog.array.insert(this.observers, observer);
};


/**
 *
 * @param {dashMVC.IObserver} observer Observer.
 */
dashMVC.Subject.prototype.detach = function(observer) {
    goog.array.remove(this.observers, observer);
};


/**
 * Notifies the observers of this subject.
 */
dashMVC.Subject.prototype.notify = function() {
    var self = this;
    goog.array.forEach(self.observers, function(/** @type {dashMVC.IObserver} */ observer) {
        observer.update(self);
    });
};
