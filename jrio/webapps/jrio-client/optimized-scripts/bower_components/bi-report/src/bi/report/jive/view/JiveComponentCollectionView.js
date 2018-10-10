define(["require","jquery.ui.mouse.touch","backbone","underscore","jquery","logger","csslink!bi/report/jive/jr/theme/jive.css"],function(e){"use strict";function t(e){e||(e={}),this.stateModel=e.stateModel,this.collection=e.collection,this.chartTypeDialogStates=e.chartTypeDialogStates,this.listenTo(this.collection,"reset",this.initSubviews,this)}e("jquery.ui.mouse.touch");var i=e("backbone"),s=e("underscore"),n=e("jquery"),o=e("logger").register("Report");return e("csslink!bi/report/jive/jr/theme/jive.css"),t.prototype={initSubviews:function(){var t=this,i=[],r=[];s.invoke(this.subviews||[],"remove"),this.subviews=[],this.subviewsReadyDfd=new n.Deferred,this.collection.forEach(function(e){"chart"===e.get("type")&&i.push("bi/chart/jr/jive/highcharts/view/ChartJiveComponentView")&&r.push(e),"fusionMap"===e.get("type")&&i.push("./FusionComponentView")&&r.push(e),"fusionChart"===e.get("type")&&i.push("./FusionComponentView")&&r.push(e),"fusionWidget"===e.get("type")&&i.push("./FusionComponentView")&&r.push(e),"googlemap"===e.get("type")&&i.push("./GooglemapComponentView")&&r.push(e),"tibco-maps"===e.get("type")&&i.push("./TibcomapComponentView")&&r.push(e),"CVComponent"===e.get("type")&&i.push("./CustomJiveComponentView")&&r.push(e),"table"===e.get("type")&&i.push("./TableJiveComponentView")&&r.push(e),"crosstab"===e.get("type")&&i.push("./CrosstabJiveComponentView")&&r.push(e)}),e(i,function(){var e=s.toArray(arguments);s.each(e,function(e,i){t.subviews.push(new e({model:r[i],report:t.collection.report,stateModel:t.stateModel,chartTypeDialogStates:t.chartTypeDialogStates}))}),o.debug("Create JIVE views ",t.subviews),t.subviewsReadyDfd.resolve()},this.subviewsReadyDfd.reject)},render:function(e){var t=this,i=new n.Deferred;return t.subviewsReadyDfd.then(function(){var o=s.invoke(t.subviews,"render",e);n.when.apply(n,o).then(i.resolve,i.reject)},i.reject),i},sizableSubviews:function(){return s.filter(this.subviews,function(e){return e.setSize})},scalableSubviews:function(){return s.filter(this.subviews,function(e){return e.scale})},getSizableSubviews:function(){var e=this,t=new n.Deferred;return this.subviewsReadyDfd.then(function(){t.resolve(s.filter(e.subviews,function(e){return e.setSize}))}),t},getScalableSubviews:function(){var e=this,t=new n.Deferred;return this.subviewsReadyDfd.then(function(){t.resolve(s.filter(e.subviews,function(e){return e.scale}))}),t},remove:function(){s.invoke(this.subviews||[],"remove"),this.stopListening(this.collection,"reset",this.initSubviews,this)}},s.extend(t.prototype,i.Events),t});