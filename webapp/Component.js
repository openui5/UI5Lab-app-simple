sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ui5lab/app/GeometryApp/model/models",
	"sap/ui/core/ComponentSupport" // needed for self-contained build
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ui5lab.app.GeometryApp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});