define(["require","underscore","components/singleSelect/model/SingleSelectListModel","components/scalableList/view/ListWithNavigation"],function(e){"use strict";var t=e("underscore"),i=e("components/singleSelect/model/SingleSelectListModel"),n=e("components/scalableList/view/ListWithNavigation"),o=n.extend({events:t.extend({},n.prototype.events,{"mouseup li":"onMouseup"}),initialize:function(e){var o=e.model||new i(e);n.prototype.initialize.call(this,t.extend({model:o,lazy:!0,selection:{allowed:!0,multiple:!1}},e))},onMouseup:function(){this.trigger("item:mouseup")},activate:function(e){if(this.getCanActivate()){var t=this.getActiveValue();if(t&&t.index===e)return;this.model.once("selection:change",this._triggerSelectionChanged,this).activate(e)}}});return o});