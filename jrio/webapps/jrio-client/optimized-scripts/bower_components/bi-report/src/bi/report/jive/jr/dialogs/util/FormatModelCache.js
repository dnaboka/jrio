define(["require","underscore"],function(e){"use strict";var n=e("underscore"),t=function(){this.map={},this.keyInfo={}};return t.prototype={get:function(e){return this.map[e]?this.map[e].current:null},set:function(e,t){this.map[e]?this.map[e].current=n.cloneDeep(t):this.map[e]={original:n.cloneDeep(t),current:n.cloneDeep(t)}},createKey:function(e,n,t){var o;return o=t?e+"-column-"+n.get("forColumns").join("_"):e+"-column-"+n.get("columnIndex"),this.keyInfo[o]||(this.keyInfo[o]={applyTo:e,model:n}),o},clear:function(){this.map={},this.keyInfo={}},remove:function(){}},t});