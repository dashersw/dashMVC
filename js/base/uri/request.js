// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('dashMVC.Request');
goog.require('goog.Uri');



/**
 * Represents a request made to the application, storing its controller, action and parameters.
 * @constructor
 * @param uri
 * @param {string} basePath uri base path.
 */
dashMVC.Request = function(uri, basePath) {
    basePath = basePath || '/';
    var uri = new goog.Uri(uri);

    this.path = uri.getPath();
    this.fragment = uri.getFragment();

    if (this.path == basePath && this.fragment.substr(0, 2) == '!/') {
        this.path = this.fragment.substr(2);
    }

    this.fragments = this.path.split('/');
    this.fragments = goog.array.filter(this.fragments, function(el, i, arr) {
        return (el != '');
    });
};
