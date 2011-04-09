/**
 * @license dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 * @author armagan@amcalar.com (Armagan Amcalar)
 * This is an open source project. Use it at your own risk however you want, keeping this license information intact.
 */

/**
 * @fileoverview This interface is based on the SplSubject interface in PHP. It is a basic interface for the subject
 * role in the observer pattern, where observers attach to subjects and subjects can notify observers.
 */

goog.provide('dashMVC.ISubject');



/**
 * Subject interface for the observer pattern.
 * @interface
 */
dashMVC.ISubject = function() {};


/**
 * Attaches an observer to the subject.
 * @param {dashMVC.IObserver} observer Attaches an observer.
 */
dashMVC.ISubject.prototype.attach = function(observer) {};


/**
 * Detaches an observer from a subject.
 * @param {dashMVC.IObserver} observer Observer to detach.
 */
dashMVC.ISubject.prototype.detach = function(observer) {};


/**
 * Notifies observers of an update.
 */
dashMVC.ISubject.prototype.notify = function() {};
