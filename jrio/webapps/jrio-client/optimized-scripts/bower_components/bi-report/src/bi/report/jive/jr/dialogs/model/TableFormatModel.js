define(["require","backbone.epoxy","underscore"],function(e){"use strict";var n=e("backbone.epoxy"),t=e("underscore");return n.Model.extend({defaults:function(){return{columnLabel:void 0,backgroundColor:void 0,align:void 0,pattern:void 0,font:{bold:!1,italic:!1,underline:!1,size:9,name:void 0,color:"000000"}}},computeds:function(){var e={};return t.each(this.defaults().font,function(n,o){e["font"+o.charAt(0).toUpperCase()+o.substring(1,o.length)]={deps:["font"],get:function(e){return e[o]},set:function(e){var n=t.extend({},this.get("font")),r=e;return"name"!==o||null==r||r.trim().length||(r=null),n[o]=r,{font:n}}}}),e},reset:function(){return this.clear({silent:!0}).set(this.defaults()),this},remove:function(){}})});