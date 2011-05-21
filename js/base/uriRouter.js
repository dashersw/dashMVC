// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('dashMVC.uriRouter');

goog.require('goog.Uri');



/**
 * @constructor
 * @param uri {goog.Uri}
 */
dashMVC.uriRouter = function() {
    this.path = new goog.Uri(window.location).getPath();
    var routes = this.path.split("/");

    routes = goog.array.filter(routes, function(el, i, arr) {
        if (el == '') return false;
        return true;
    });

}

dashMVC.uriRouter.prototype.customSchemes = {
    "buslist" : {
        controller: dashMVC.IndexController,
        action: "list"
    }
}

dashMVC.uriRouter.prototype.scheme = {
    "index": {
        controller: dashMVC.IndexController,
        actions: {
            "index": dashMVC.IndexController.index,
            "list": dashMVC.IndexController.list
        }
    },
    "bus": {
        controller: dashMVC.BusController,
        actions: {
            "index": dashMVC.BusController.index,
            "list": dashMVC.BusController.list
        }
    }
}