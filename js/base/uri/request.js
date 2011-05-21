// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('dashMVC.Request');


/**
 * Represents a request made to the application, storing its controller, action and parameters.
 * @constructor
 * @param uri
 */
dashMVC.Request = function(uri) {
    var uri = new goog.Uri(uri);

    this.path = uri.getPath();
    this.fragment = uri.getFragment();

    if (this.path == "/" && this.fragment.substr(0, 2) == '!/') {
        this.path = this.fragment.substr(2);
    }

    this.fragments = this.path.split("/");
    this.fragments = goog.array.filter(this.fragments, function(el, i, arr) {
        return (el != '')
    });

    delete this.fragment;
};
