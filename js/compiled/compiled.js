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
var g=Array.prototype,i=g.indexOf?function(a,b,c){return g.indexOf.call(a,b,c)}:function(a,b,c){c=c==null?0:c<0?Math.max(0,a.length+c):c;if(typeof a=="string"){if(typeof b!="string"||b.length!=1)return-1;return a.indexOf(b,c)}for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},j=g.forEach?function(a,b,c){g.forEach.call(a,b,c)}:function(a,b,c){for(var r=a.length,n=typeof a=="string"?a.split(""):a,h=0;h<r;h++)h in n&&b.call(c,n[h],h,a)};function k(a,b){i(a,b)>=0||a.push(b)};/*
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
function o(){this.a=[];this.y=this.x=0}d(o,l);/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
/*
 dashMVC - a Javascript MVC that plays perfect with Google Closure Library
 @author armagan@amcalar.com (Armagan Amcalar)
 This is an open source project. Use it at your own risk however you want, keeping this license information intact.
*/
var p=new m,q=new m,s=new o,t=new e(s);k(p.a,new e(s));k(q.a,t);k(s.a,p);k(s.a,q);s.x=42;f(s);console.log(p.getData(),q.getData());p.click();console.log(p.getData(),q.getData());q.click();console.log(p.getData(),q.getData());})()
