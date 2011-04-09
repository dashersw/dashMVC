/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview This interface is based on the SplObserver interface in PHP. It is a basic interface for the observer
 * role in the observer pattern, where observers attach to subjects and subjects can notify observers.
 */

goog.provide('dashMVC.IObserver');



/**
 * Observer interface for the observer pattern.
 * @interface */
dashMVC.IObserver = function() {};


/**
 * Handles an update received from a subject via the subject's notify method.
 * @param {dashMVC.ISubject} subject subject to receive update from.
 */
dashMVC.IObserver.prototype.update = function(subject) {};
