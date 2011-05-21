// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('dashMVC.Scheme');

dashMVC.Scheme = function(name, controller) {
    this.name = name;
    this.controller = controller;

    this.actions = goog.object.create(Array.prototype.slice.call(arguments, 2));
}