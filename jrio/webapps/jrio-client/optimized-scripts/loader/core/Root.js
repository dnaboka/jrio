define(["require","underscore","jquery","request","./util/helper","logger"],function(e){"use strict";function r(e,r){return g.debug(e,r),r}function t(e,r,t,n){this.isLoggerEnabled=r,this.logLevel=t,this.scripts=n,this.baseUrl=e}var n=e("underscore"),i=e("jquery"),o=e("request"),s=e("./util/helper"),g=e("logger").register("Root");return n.extend(t.prototype,{requirejs:function(){var e,t=new i.Deferred,g=this.scripts?this.scripts:"scripts",l=g+"/require.config.js",u=n.partial(r,"Script loader configs for JRS: "),c=this;return e=o({url:l,dataType:"text"}).then(s.loaderConfig).then(function(e){return e.baseUrl=g,e.config&&e.config.logger&&(e.config.logger.enabled=c.isLoggerEnabled,e.config.logger.level=c.logLevel),e}).then(u),i.when(e).then(function(e){return e},t.reject).then(t.resolve),t.promise()}}),t});