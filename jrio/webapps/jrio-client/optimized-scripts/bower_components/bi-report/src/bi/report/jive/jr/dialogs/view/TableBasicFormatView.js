define(["require","underscore","../../../util/jiveDataConverter","backbone.epoxy","backbone","./TableCommonFormatView","../util/FormatModelCache","text!../template/tableBasicFormatTemplate.htm","text!../template/basicOptionTemplate.htm","text!../template/groupOptionTemplate.htm","text!../template/currencyMenuTemplate.htm","text!../template/currencyOptionTemplate.htm","../model/TableFormatModel","common/component/menu/ContextMenu","../util/NumberFormatPatternUtil"],function(e){"use strict";function t(){var e,t,n,a=this.viewModel,o=this.cache,i=a.get("applyTo"),l=a.previous("applyTo"),r=this.columnComponentModel;null!=i&&(l&&(e="heading"===l||"detailrows"===l?o.createKey(l,r):o.createKey(l,r.parent.columnGroups.findWhere({id:l}),!0),o.set(e,this.model.toJSON())),"heading"===i?(e=o.createKey(i,r),null===o.get(e)&&(n=r.headingFormat.toJSON(),n.columnLabel=r.get("columnLabel"),o.set(e,n)),this.viewModel.set("dataType","text")):"detailrows"===i?(e=o.createKey(i,r),null===o.get(e)&&(n=r.detailsRowFormat.toJSON(),n.pattern=r.detailsRowFormat.toJiveFormat(),o.set(e,n)),this.viewModel.set("dataType",r.get("dataType").toLowerCase())):(t=r.parent.columnGroups.findWhere({id:i}),e=o.createKey(i,t,!0),null===o.get(e)&&(n=t.format.toJSON(),n.pattern=t.format.toJiveFormat(),o.set(e,n)),this.viewModel.set("dataType",t.get("dataType").toLowerCase())),this.model.reset().set(o.get(e)))}function n(){var e=this.columnComponentModel,t=this.viewModel.defaults(),n=this.viewModel.get("dataType");e&&(this.viewModel.set("patterns",e.parent.config.genericProperties.patterns[n]||[]),this.viewModel.set("hasPercentage",t.hasPercentage),this.viewModel.set("hasComma",t.hasComma),this.viewModel.set("currencySymbol",t.currencySymbol))}function a(){var e=this,t=this.columnComponentModel,n=t.get("columnIndex"),a=t.parent.columnGroups,o=[],l=[],r=[],s=[];t.get("canFormatHeading")&&o.push({value:"heading",label:this.i18n["net.sf.jasperreports.components.headertoolbar.applyto.option.headings"]}),a.each(function(t){-1!=i.indexOf(t.get("forColumns"),n)&&("groupheading"===t.get("groupType")?l.push({value:t.get("id"),label:t.get("groupName")+" "+e.i18n["net.sf.jasperreports.components.headertoolbar.groupheading.prefix"]}):"groupsubtotal"===t.get("groupType")?r.push({value:t.get("id"),label:t.get("groupName")+" "+e.i18n["net.sf.jasperreports.components.headertoolbar.groupsubtotal.prefix"]}):"tabletotal"===t.get("groupType")&&s.push({value:t.get("id"),label:e.i18n["net.sf.jasperreports.components.headertoolbar.applyto.option.tabletotal"]}))}),o.push.apply(o,l),o.push({value:"detailrows",label:this.i18n["net.sf.jasperreports.components.headertoolbar.applyto.option.detailrows"]}),o.push.apply(o,r),o.push.apply(o,s),this.viewModel.set("applyToOptions",o);var c=this.viewModel.previous("applyTo");c?(this.viewModel.set("applyTo",null,{silent:!0}),i.findWhere(o,{value:c})?this.viewModel.set("applyTo",c):this.viewModel.set("applyTo","heading"===o[0].value?"heading":"detailrows")):this.viewModel.set("applyTo","heading"===o[0].value?"heading":"detailrows")}function o(){var e,t=this.viewModel.get("applyTo");e="heading"===t||"detailrows"===t?this.cache.createKey(t,this.columnComponentModel):this.cache.createKey(t,this.columnComponentModel.parent.columnGroups.findWhere({id:t}),!0),this.cache.set(e,this.model.toJSON())}var i=e("underscore"),l=e("../../../util/jiveDataConverter"),r=e("backbone.epoxy"),s=e("backbone"),c=e("./TableCommonFormatView"),p=e("../util/FormatModelCache"),m=e("text!../template/tableBasicFormatTemplate.htm"),h=e("text!../template/basicOptionTemplate.htm"),u=e("text!../template/groupOptionTemplate.htm"),d=e("text!../template/currencyMenuTemplate.htm"),g=e("text!../template/currencyOptionTemplate.htm"),y=e("../model/TableFormatModel"),v=e("common/component/menu/ContextMenu"),f=e("../util/NumberFormatPatternUtil"),b={LOCALE_SPECIFIC:"\xa4",USD:"$",GBP:"\xa3",EUR:"\u20ac",YEN:"\xa5"},T=r.Model.extend({defaults:function(){return{dataType:"text",fontSizes:[],fontNames:[],patterns:[],applyToOptions:[],applyTo:null,hasPercentage:!1,hasComma:!1,currencySymbol:"LOCALE_SPECIFIC"}},computeds:{hasPattern:function(){var e=this.get("dataType");return"numeric"===e||"date"===e||"time"===e},hasHeading:function(){return"heading"===this.get("applyTo")}},reset:function(){return this.clear({silent:!0}).set(this.defaults()),this},remove:function(){}});return c.extend({events:{"click .jive_inputbutton[name='increaseDecimalsBtn']":"_addDecimal","click .jive_inputbutton[name='decreaseDecimalsBtn']":"_removeDecimal","click .jive_inputbutton[name='currencyBtn']":"_showCurrencyMenu"},el:function(){return i.template(m,{i18n:this.i18n})},initialize:function(){this.model=new y,this.viewModel=new T,this.cache=new p,this.listenTo(this.viewModel,"change:applyTo",i.bind(t,this)),this.listenTo(this.viewModel,"change:hasPercentage",this._togglePercentageFormat),this.listenTo(this.viewModel,"change:hasComma",this._toggleCommaFormat),this.listenTo(this.viewModel,"change:dataType",i.bind(n,this)),this.on("tabSwitched",function(){o.call(this)}),r.View.prototype.initialize.apply(this,arguments),this._initCurrencyContextMenu()},bindingHandlers:i.extend({transformedPatterns:function(e,t){var n="";i.each(t,function(e){n+=i.template(h,{value:e.key,text:e.val})}),e.html(n)},groupedOptions:function(e,t){var n=this,a="";t.extension&&i.each(t.extension,function(e,t,o){a+=i.template(u,{start:0===t,end:t==o.length-1,label:n.view.i18n["net.sf.jasperreports.components.headertoolbar.label.extfonts"],value:e,text:e})}),t.system&&i.each(t.system,function(e,t,o){a+=i.template(u,{start:0===t,end:t==o.length-1,label:n.view.i18n["net.sf.jasperreports.components.headertoolbar.label.sysfonts"],value:e,text:e})}),e.html(a)},nonGroupedOptions:function(e,t){var n="";t&&i.each(t,function(e,t,a){n+=i.template(h,{value:e,text:e})}),e.html(n)}},c.prototype.bindingHandlers),bindingFilters:{customDecimal:{get:function(e){var t=parseFloat(e);return i.isNaN(t)?null:t},set:function(e){var t=parseFloat(e);return i.isNaN(t)?null:t}}},computeds:{isDuration:function(){return l.DURATION_PATTERN===this.getBinding("pattern")},getNumericTypeVisibility:function(){var e="numeric"===this.getBinding("dataType"),t=l.DURATION_PATTERN===this.getBinding("pattern");return e&&!t?"visible":"hidden"}},setColumnComponentModel:function(e,t){var n=this.viewModel;t?o.call(this):(this.cache.clear(),n.reset(),n.set("fontSizes",e.parent.config.genericProperties.fontSizes),n.set("fontNames",e.parent.config.genericProperties.fonts)),this.columnComponentModel=e,a.call(this)},getActions:function(){var e,t=this.cache,n=[];return o.call(this),i.each(t.map,function(a,o){var i,l=new s.Model(a.original);l.set(a.current),l.hasChanged()&&(i=t.keyInfo[o],"heading"===i.applyTo?(i.model.updateFromReportComponentObject({label:a.current.columnLabel,headingFormat:a.current}),n.push(i.model.actions["change:headingFormat"].call(i.model))):"detailrows"===i.applyTo?(e=a.current,e.pattern=f.jivePatternToSchemaPattern(e.pattern,i.model.get("dataType").toLowerCase()),i.model.updateFromReportComponentObject({detailsRowFormat:e}),n.push(i.model.actions["change:detailsRowFormat"].call(i.model))):(e=a.current,e.pattern=f.jivePatternToSchemaPattern(e.pattern,i.model.get("dataType").toLowerCase()),i.model.updateFromReportComponentObject({format:e}),n.push(i.model.actions["change:format"].call(i.model))))}),n},_initCurrencyContextMenu:function(){var e=this,t=[{label:this.i18n["net.sf.jasperreports.components.headertoolbar.label.currency.none"],action:"none",symbol:null},{label:this.i18n["net.sf.jasperreports.components.headertoolbar.label.localespecific"],action:"localeSpecific",symbol:"LOCALE_SPECIFIC"},{label:b.USD+" - USD",action:"usd",symbol:"USD"},{label:b.EUR+" - EUR",action:"eur",symbol:"EUR"},{label:b.GBP+" - GBP",action:"gbp",symbol:"GBP"},{label:b.YEN+" - YEN",action:"yen",symbol:"YEN"}];this.currencyMenu=new v(t,{menuContainerTemplate:d,menuOptionTemplate:g}),i.each(t,function(t){e.listenTo(e.currencyMenu,"option:"+t.action,e._applyCurrencyFormat)})},_togglePercentageFormat:function(e){var t=this.getBinding("patterns"),n=this.getBinding("hasPercentage"),a=[];t.length&&(i.each(t,function(e){l.DURATION_PATTERN===e.key?a.push({key:e.key,val:e.val}):a.push({key:f.addRemovePercentage(e.key,n),val:f.addRemovePercentageForNumber(e.val,n)})}),this.setBinding("patterns",a))},_toggleCommaFormat:function(e){var t=this.getBinding("patterns"),n=this.getBinding("hasComma"),a=[];t.length&&(i.each(t,function(e){l.DURATION_PATTERN===e.key?a.push({key:e.key,val:e.val}):a.push({key:f.addRemoveThousandsSeparator(e.key,n),val:f.addRemoveThousandsSeparator(e.val,n)})}),this.setBinding("patterns",a))},_addDecimal:function(e){var t=this.getBinding("patterns"),n=[];t.length&&(i.each(t,function(e){l.DURATION_PATTERN===e.key?n.push({key:e.key,val:e.val}):n.push({key:f.addRemoveDecimalPlace(e.key,!0),val:f.addRemoveDecimalPlace(e.val,!0)})}),this.setBinding("patterns",n))},_removeDecimal:function(e){var t=this.getBinding("patterns"),n=[];t.length&&(i.each(t,function(e){l.DURATION_PATTERN===e.key?n.push({key:e.key,val:e.val}):n.push({key:f.addRemoveDecimalPlace(e.key,!1),val:f.addRemoveDecimalPlace(e.val,!1)})}),this.setBinding("patterns",n))},_applyCurrencyFormat:function(e,t){var n=this.getBinding("currencySymbol"),a=t.get("symbol"),o=this.getBinding("patterns"),r=[];o.length&&(i.each(o,function(e){l.DURATION_PATTERN===e.key?r.push({key:e.key,val:e.val}):(n&&(e.key=f.addRemoveCurrencySymbol(e.key,!1,b[n]),e.val=f.addRemoveCurrencySymbol(e.val,!1,b[n])),a?r.push({key:f.addRemoveCurrencySymbol(e.key,!0,b[a]),val:f.addRemoveCurrencySymbol(e.val,!0,b[a])}):n&&r.push(e))}),r.length&&(this.setBinding("patterns",[]),this.setBinding("patterns",r))),this.setBinding("currencySymbol",a)},_showCurrencyMenu:function(e){var t=this.$(e.currentTarget),n=t.offset();e.preventDefault(),e.stopPropagation(),this.currencyMenu.show({top:n.top+t.height(),left:n.left})},clear:function(){this.cache.clear()},remove:function(){r.View.prototype.remove.apply(this,arguments),this.model&&this.model.remove(),this.cache&&this.cache.remove(),this.viewModel&&this.viewModel.remove(),this.currencyMenu&&this.currencyMenu.remove()}})});