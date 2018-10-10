define(["require","./BaseComponentModel","underscore"],function(t){"use strict";var e=t("./BaseComponentModel"),r=t("underscore"),i="action",n={AD_HOC_DESIGNER:"adhoc designer",JSS_IREPORT_STUDIO:"JSS/iReport studio"},a="chart";return e.extend({defaults:function(){return{charttype:void 0,datetimeSupported:!1,hcinstancedata:void 0,id:void 0,interactive:!0,module:"jive.highcharts",type:a}},api:{changeType:{}},actions:{"change:charttype":function(){return{actionName:"changeChartType",changeChartTypeData:{chartComponentUuid:this.get("chartUuid"),chartType:this.get("charttype")}}}},initialize:function(){if(this.has("hcinstancedata")){var t=this.get("hcinstancedata"),e=this._detectCreator(t);n.AD_HOC_DESIGNER===e&&(delete t.width,delete t.height)}this.unset("uimodule"),this.config=JSON.parse(JSON.stringify(this.toJSON()))},changeType:function(t){this.trigger(i,{actionName:"changeChartType",changeChartTypeData:{chartComponentUuid:this.config.chartUuid,chartType:t.type},options:{showErrorDialog:!0}})},_detectCreator:function(t){var e,i=t.services,a=r.some(i,function(t){return-1!=t.service.indexOf("adhoc")});return a&&(e=n.AD_HOC_DESIGNER),e&&this.set("creator",e),e},toReportComponentObject:function(){return this.get("interactive")?{id:this.get("id"),componentType:a,chartType:this.get("charttype"),name:this.get("name")}:void 0},updateFromReportComponentObject:function(t){this.set({charttype:t.chartType})},handleServerError:function(t){this.trigger("serverError",t)},handleClientError:function(t){this.trigger("serverError",t)}})});