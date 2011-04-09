(function(){function d(a,b){function c(){}c.prototype=b.prototype;a.c=b.prototype;a.prototype=new c};/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
function e(a){this.b=a}e.prototype.update=function(a){var b=this.b,a=a.getData()+1;b.x=a;f(b)};/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
var g=Array.prototype,h=g.indexOf?function(a,b,c){return g.indexOf.call(a,b,c)}:function(a,b,c){c=c==null?0:c<0?Math.max(0,a.length+c):c;if(typeof a=="string"){if(typeof b!="string"||b.length!=1)return-1;return a.indexOf(b,c)}for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},j=g.forEach?function(a,b,c){g.forEach.call(a,b,c)}:function(a,b,c){for(var t=a.length,q=typeof a=="string"?a.split(""):a,i=0;i<t;i++)i in q&&b.call(c,q[i],i,a)};function k(a,b){h(a,b)>=0||a.push(b)};/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
function l(){this.a=[]}function f(a){j(a.a,function(b){b.update(a)})};/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
function m(){this.a=[]}d(m,l);m.prototype.getData=function(){return this.data};m.prototype.update=function(a){this.data=a.x};m.prototype.click=function(){f(this)};/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
function n(){this.a=[];this.y=this.x=0}d(n,l);/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
var o=new m,p=new m,r=new n,s=new e(r);k(o.a,new e(r));k(p.a,s);k(r.a,o);k(r.a,p);r.x=42;f(r);console.log(o.getData(),p.getData());o.click();console.log(o.getData(),p.getData());p.click();console.log(o.getData(),p.getData());/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
var u=new m,v=new n;k(u.a,new e(v));k(v.a,u);v.x=42;f(v);console.log(u.getData());u.click();console.log(u.getData());console.dir(v);})()
