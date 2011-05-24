// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('dashMVC.uri.router');
goog.require('dashMVC.uri.Request');
goog.require('goog.array');
goog.require('goog.object');


/**
 * Varible to hold uri base path
 *
 * @private
 */
dashMVC.uri.router.basePath_ = '/';


/**
 * uri.router singleton. It is responsible for routing the incoming request to appropriate controller and actions
 * with appropriate parameters.
 * The application routes and aliases are added to the uri.router and every time the URI
 * changes, it routes the request to the appropriate controller/action.
 * @param {string} uri The URI to parse.
 */
dashMVC.uri.router.init = function(uri) {
    var basePath = dashMVC.uri.router.getBasePath();
    dashMVC.uri.router.request = new dashMVC.uri.Request(uri || window.location);

    dashMVC.uri.router.resolveAliases_(dashMVC.uri.router.request);
    dashMVC.uri.router.process_(dashMVC.uri.router.request);

    console.log(dashMVC.uri.router.getController(), dashMVC.uri.router.getAction(), dashMVC.uri.router.getParams());
};


/**
 * Set base path 
 *
 * @param {string} path uri base path.
 */
dashMVC.uri.router.setBasePath = function(path) {
    dashMVC.uri.router.basePath_ = path || '/';
};

/**
 * Return uri base path
 *
 * @return {string} uri base path.
 */
dashMVC.uri.router.getBasePath = function() {
    return dashMVC.uri.router.basePath_;
};


/**
 * Resolves aliases to real URI schemes.
 * If the request matches any alias, this function resolves it to the original scheme.
 * @private
 * @param {dashMVC.uri.Request} request Request to look for an alias match.
 */
dashMVC.uri.router.resolveAliases_ = function(request) {
    var response, scheme;
    goog.array.some(dashMVC.uri.router.aliases, function(alias, i, arr) {
        if (response = request.path.match(alias.format)) {
            scheme = dashMVC.uri.router.getScheme(alias.schemeName);
            var fragments = [alias.schemeName, alias.schemeAction];
            for (var i = 0; i < response.length - 1; i++) {
                fragments.push(alias.params[i], response[i + 1]);
            }
            request.fragments = fragments;
            return true;
        }
        return false;
    });
};


/**
 * This function sets the current scheme and the related controllers, actions and parameters.
 * @private
 * @param {dashMVC.uri.Request} request Request to be processed.
 */
dashMVC.uri.router.process_ = function(request) {
    var fragments = goog.array.clone(request.fragments);

    dashMVC.uri.router.currentScheme = dashMVC.uri.router.schemes[fragments[0]] || dashMVC.uri.router.schemes.def;
    dashMVC.uri.router.setController_(fragments.shift());
    dashMVC.uri.router.setAction_(fragments.shift());
    dashMVC.uri.router.setParams_(fragments);
};

/**
 * Sets the current controller required by the request. If there are no such controllers, default controller is set.
 * @private
 * @param {string} controller Dummy parameter for controller name (This function already takes the controller name
 *                            from the current scheme, but in order for fragments.shift() to work in
 *                            @link{dashMVC.uri.router.process_}, this function should receive a parameter.
 */
dashMVC.uri.router.setController_ = function(controller) {
    dashMVC.uri.router.controller_ = dashMVC.uri.router.currentScheme.controller;
};

/**
 * Sets the current action required by the request. If there are no such actions, default action is set.
 * @private
 * @param {string} action Action present on the scheme.
 */
dashMVC.uri.router.setAction_ = function(action) {
    dashMVC.uri.router.action_ = dashMVC.uri.router.currentScheme.actions[action] ||
                                dashMVC.uri.router.schemes.def.actions.def;
};

/**
 * Sets the parameters. Notice that if there are odd number of parameters, an empty value is added to the end of
 * the array for convenient operation of sending only the keys (where values are unimportant to the backend)
 * @private
 * @param {Array.<string>} paramsArray Array of parameters.
 */
dashMVC.uri.router.setParams_ = function(paramsArray) {
    var params, paramsArray = paramsArray || [];

    if (dashMVC.uri.router.getAction() == dashMVC.uri.router.schemes.def.actions.def) {
        dashMVC.uri.router.params_ = {};
        return;
    }

    if (paramsArray.length % 2 == 1)
        paramsArray.push('');
    params = goog.object.create(paramsArray);

    dashMVC.uri.router.params_ = params;
};


/**
 * Returns the active controller.
 */
dashMVC.uri.router.getController = function() {
    return dashMVC.uri.router.controller_;
};


/**
 * Returns the active action.
 */
dashMVC.uri.router.getAction = function() {
    return dashMVC.uri.router.action_;
};


/**
 * Returns the active parameters.
 */
dashMVC.uri.router.getParams = function() {
    return dashMVC.uri.router.params_;
};


/**
 * Adds a URI scheme to the router. This scheme will be tried upon each request.
 * @param {Object} scheme Scheme to be added.
 */
dashMVC.uri.router.addScheme = function(scheme) {
    dashMVC.uri.router.schemes[scheme.name] = scheme;
};


/**
 * Returns a given URI scheme.
 * @param {string} name Scheme name.
 */
dashMVC.uri.router.getScheme = function(name) {
    return dashMVC.uri.router.schemes[name];
};


/**
 * Adds an alias to the router. An alias points to a real scheme, but is a convenient method for the users to reach
 * that scheme.
 * @param {Object} alias Alias to be added.
 */
dashMVC.uri.router.addAlias = function(alias) {
    var format = '^' + alias.format + '\/*$',
        fields = format.match(/(:\w+)/g);

    if (fields) {
        alias.params = [];
        format = format.replace(/(:\w+)/g, '([^?#\/]+)');
        for (var i = 0, l = fields.length; i < l; i++) {
            alias.params.push(fields[i].substr(1));
        }
    }
    format = format.replace(/\//g, '\\/');
    alias.format = new RegExp(format);

    dashMVC.uri.router.aliases.push(alias);
};

var defaultController = 'default c', defaultAction = 'default a';
var controller1 = 'resolved c1', action1 = 'resolved a1', action2 = 'resolved a2',
    controller2 = 'resolved c2', action3 = 'resolved a3', action4 = 'resolved a4';

dashMVC.uri.router.aliases = [];
dashMVC.uri.router.schemes = {
    def: {
        controller: defaultController,
        actions: {
            def: defaultAction
        }
    }
};

dashMVC.uri.router.addScheme({
    name: 'controller1',
    controller: controller1,
    actions: {
        'action1': action1,
        'action2': action2
    }
});

dashMVC.uri.router.addScheme({
    name: 'controller2',
    controller: controller2,
    actions: {
        'action3': action3,
        'action4': action4
    }
});

dashMVC.uri.router.addAlias({
    name: 'ahmet',
    format: 'ahmet/:param1/:param2',
    schemeName: 'controller1',
    schemeAction: 'action2'
});

dashMVC.uri.router.addAlias({
    name: 'ahmet2',
    format: 'ahmet/:param21',
    schemeName: 'controller2',
    schemeAction: 'action4'
});

dashMVC.uri.router.addAlias({
    name: 'ahmet3',
    format: 'ahmet',
    schemeName: 'controller1',
    schemeAction: 'action1'
});