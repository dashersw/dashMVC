// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('dashMVC.uriRouter');

goog.require('goog.Uri');
goog.require('dashMVC.Request');

dashMVC.uriRouter.init = function(uri) {
    dashMVC.uriRouter.request = new dashMVC.Request(uri || window.location);

    dashMVC.uriRouter.process(dashMVC.uriRouter.request);
}

dashMVC.uriRouter.process = function(request) {
    var fragments = goog.array.clone(request.fragments),
        scheme = fragments[0];

    //TODO: check for aliases

    if (dashMVC.uriRouter.aliases[scheme]) {
        var alias = dashMVC.uriRouter.aliases[scheme];
        var response = request.path.match(alias.matcher);
        if (response.length > 0){
            for (var i = 0; i < response.length; i++) {

            }
        }
            fragments = [alias.controller, alias.action];
        fragments.push(alias.controller);
        fragments
        //console.log(alias.controller + '/' + alias.action + '/' + alias.params)
    }

        dashMVC.uriRouter.findScheme(scheme);

    console.dir(request);
    dashMVC.uriRouter.setController_(fragments.shift());
    dashMVC.uriRouter.setAction_(fragments.shift());
    dashMVC.uriRouter.setParams_(fragments);

    dashMVC.uriRouter.findRoute();
};

dashMVC.uriRouter.findScheme = function(scheme) {
    dashMVC.uriRouter.currentScheme = dashMVC.uriRouter.scheme[scheme] || dashMVC.uriRouter.scheme.def;
}

dashMVC.uriRouter.findRoute = function() {
    console.log(dashMVC.uriRouter.getController(), dashMVC.uriRouter.getAction(), dashMVC.uriRouter.getParams());
}

dashMVC.uriRouter.setController_ = function(controller) {
    dashMVC.uriRouter.controller_ = dashMVC.uriRouter.currentScheme.controller;
};

dashMVC.uriRouter.setAction_ = function(action) {
    dashMVC.uriRouter.action_ = dashMVC.uriRouter.currentScheme.actions[action] ||
                                dashMVC.uriRouter.scheme.def.actions.def;
}

/**
 * sets the parameters. Notice that if there are odd number of parameters, an empty value is added to the end of
 * the array for convenient operation of sending only the keys (where values are unimportant to the backend)
 */
dashMVC.uriRouter.setParams_ = function(paramsArray) {
    var params, paramsArray = paramsArray || [];

    if (dashMVC.uriRouter.getAction() == dashMVC.uriRouter.scheme.def.actions.def) {
        dashMVC.uriRouter.params_ = {};
        return;
    }

    if (paramsArray.length % 2 == 1)
        paramsArray.push('');
    params = goog.object.create(paramsArray);

    dashMVC.uriRouter.params_ = params;
}

dashMVC.uriRouter.getController = function() {
    return dashMVC.uriRouter.controller_;
}

dashMVC.uriRouter.getAction = function() {
    return dashMVC.uriRouter.action_;
}

dashMVC.uriRouter.getParams = function() {
    return dashMVC.uriRouter.params_;
}

var defaultController = "default c", defaultAction = "default a";
var controller1 = "resolved c1", action1 = "resolved a1", action2 = "resolved a2",
    controller2 = "resolved c2", action3 = "resolved a3", action4 = "resolved a4";

dashMVC.uriRouter.addScheme = function(name, controller, actions) {
    var scheme = {};
    scheme.controller = controller;
    scheme.actions = goog.object.create(Array.prototype.slice.call(arguments, 2));
    dashMVC.uriRouter.scheme[name] = scheme;
}

dashMVC.uriRouter.addAlias = function(name, format, scheme) {
    var alias = {};
    alias.params = {};

    var fields = format.match(/(:\w+)/g);
    for (var i = 0, l = fields.length; i < l; i++) {
        alias.params[fields[i].substr(1)] = '';
        format = format.replace(fields[i], '([^?#\/]+)');
    }

    format = format.replace(/\//g, '\\/');
    alias.matcher = new RegExp(format);

    alias.controller = scheme.controller;
    alias.action = scheme.action;

    dashMVC.uriRouter.aliases[name] = alias;
}

dashMVC.uriRouter.aliases = {};
dashMVC.uriRouter.scheme = {
    def: {
        controller: defaultController,
        actions: {
            def: defaultAction
        }
    }
};


dashMVC.uriRouter.addAlias('ahmet', 'ahmet/:param1/:param2', {controller:'controller2', action:'action3'});

dashMVC.uriRouter.addScheme('controller2', controller2, 'action3', action3, 'action4', action4);
dashMVC.uriRouter.addScheme('controller1', controller1, 'action1', action1, 'action2', action2);

//    "controller1": {
//        controller: controller1,
//        actions: {
//            "action1": action1,
//            "action2": action2
//        }
//    },
//    "controller2": {
//        controller: controller2,
//        actions: {
//            "action3": action3,
//            "action4": action4
//        }
//    }
//}
