define(["require","underscore","jquery","bundle!adhoc_messages","common/component/dialog/Dialog","./view/ChartTypeSelectorView","text!./template/chartTypeSelectorDialogTemplate.htm"],function(e){"use strict";var t=(e("underscore"),e("jquery")),i=e("bundle!adhoc_messages"),a=e("common/component/dialog/Dialog"),l=e("./view/ChartTypeSelectorView"),s=e("text!./template/chartTypeSelectorDialogTemplate.htm");return a.extend({constructor:function(e){this.model=e.model,this.chartTypeDialogState=e.chartTypeDialogStates[this.model.get("id")],a.prototype.constructor.call(this,{model:e.model,title:i.ADH_1214_ICHARTS_DIALOG_CHART_TYPE_TITLE,additionalCssClasses:"jive_chartTypeSelector jive_dialog",contentContainer:".subcontainer",content:new l,template:s})},initialize:function(){a.prototype.initialize.apply(this,arguments),this._setupSelections(),this.chartTypeDialogState.opened&&this.open(),this.$el.css(this.chartTypeDialogState)},_setupSelections:function(){this.$el.find("div.cell").removeClass("selected"),this.$el.find('div.cell[data-hcname="'+this.model.get("charttype")+'"]').addClass("selected"),this.model.get("datetimeSupported")?this.$el.find('div.cell[data-hcname^="TimeSeries"]').removeClass("jive_disabled"):this.$el.find('div.cell[data-hcname^="TimeSeries"]').addClass("jive_disabled"),this.model.get("treemapSupported")?this.$el.find('div.cell[data-hcname$="TreeMap"]').removeClass("jive_disabled"):this.$el.find('div.cell[data-hcname$="TreeMap"]').addClass("jive_disabled")},events:{"click div.closeIcon":"close","touchend div.closeIcon":"close","click div.cell":"selectChart","touchstart div.cell":"selectChart"},selectChart:function(e){var i,a=e.currentTarget;t(a).hasClass("jive_disabled")||(i=a.getAttribute("data-hcname"),i!==this.model.get("charttype")&&this.model.changeType({type:i}))},close:function(){this.chartTypeDialogState.opened=!1,this.chartTypeDialogState.top=this.$el.css("top"),this.chartTypeDialogState.left=this.$el.css("left"),a.prototype.close.apply(this,arguments)},remove:function(){this.$el.off("click touchend touchstart"),this.isVisible()&&(this.chartTypeDialogState.opened=!0,this.chartTypeDialogState.top=this.$el.css("top"),this.chartTypeDialogState.left=this.$el.css("left")),a.prototype.remove.call(this,arguments)}})});