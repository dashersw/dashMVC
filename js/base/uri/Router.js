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

    // Resolve aliases
    if (dashMVC.uriRouter.aliases[scheme]) {
        var alias = dashMVC.uriRouter.aliases[scheme];
        scheme = alias.controller;
        fragments = [alias.controller, alias.action];

        var response = request.path.match(alias.matcher);
        if (response.length > 0) {
            for (var i = 0; i < response.length - 1; i++) {
                fragments.push(alias.params[i], response[i + 1]);
            }
        }
    }

    // Resolve current scheme
    dashMVC.uriRouter.findScheme(scheme);

    dashMVC.uriRouter.setController_(fragments.shift());
    dashMVC.uriRouter.setAction_(fragments.shift());
    dashMVC.uriRouter.setParams_(fragments);

    console.log(dashMVC.uriRouter.getController(), dashMVC.uriRouter.getAction(), dashMVC.uriRouter.getParams());
};

dashMVC.uriRouter.findScheme = function(scheme) {
    dashMVC.uriRouter.currentScheme = dashMVC.uriRouter.schemes[scheme] || dashMVC.uriRouter.schemes.def;
}

dashMVC.uriRouter.setController_ = function(controller) {
    dashMVC.uriRouter.controller_ = dashMVC.uriRouter.currentScheme.controller;
};

dashMVC.uriRouter.setAction_ = function(action) {
    dashMVC.uriRouter.action_ = dashMVC.uriRouter.currentScheme.actions[action] ||
                                dashMVC.uriRouter.schemes.def.actions.def;
}

/**
 * sets the parameters. Notice that if there are odd number of parameters, an empty value is added to the end of
 * the array for convenient operation of sending only the keys (where values are unimportant to the backend)
 */
dashMVC.uriRouter.setParams_ = function(paramsArray) {
    var params, paramsArray = paramsArray || [];

    if (dashMVC.uriRouter.getAction() == dashMVC.uriRouter.schemes.def.actions.def) {
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

dashMVC.uriRouter.addScheme = function(schemeName, scheme) {
    dashMVC.uriRouter.schemes[schemeName] = scheme;
}

dashMVC.uriRouter.addAlias = function(aliasName, format, scheme) {
    var alias = {};

    alias.params = [];
    var fields = format.match(/(:\w+)/g);
    for (var i = 0, l = fields.length; i < l; i++) {
        alias.params.push(fields[i].substr(1));
        format = format.replace(fields[i], '([^?#\/]+)');
    }

    format = format.replace(/\//g, '\\/');
    alias.matcher = new RegExp(format);

    alias.controller = scheme.controller;
    alias.action = scheme.action;

    dashMVC.uriRouter.aliases[aliasName] = alias;
}

var defaultController = 'default c', defaultAction = 'default a';
var controller1 = 'resolved c1', action1 = 'resolved a1', action2 = 'resolved a2',
    controller2 = 'resolved c2', action3 = 'resolved a3', action4 = 'resolved a4';

dashMVC.uriRouter.aliases = {};
dashMVC.uriRouter.schemes = {
    def: {
        controller: defaultController,
        actions: {
            def: defaultAction
        }
    }
};

dashMVC.uriRouter.getScheme = function(name) {
    return dashMVC.uriRouter.schemes[name];
}

dashMVC.uriRouter.addScheme('controller1',
    {
        controller: controller1,
        actions: {
            'action1': action1,
            'action2': action2
        }
    });

dashMVC.uriRouter.addScheme('controller2',
    {
        controller: controller2,
        actions: {
            'action1': action3,
            'action2': action4
        }
    });

dashMVC.uriRouter.addAlias('ahmet', 'ahmet/:param1/:param2', { controller: 'controller1', action: 'action3' });