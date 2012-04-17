var NavigationController = require('NavigationController').NavigationController,
	menuapp = require('menuapp').menuapp;

var controller = new NavigationController();

controller.open(new menuapp(controller));