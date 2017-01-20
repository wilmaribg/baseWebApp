'use strict';

angular
	.module( 'app' )
	.controller( 'mainController', mainController );

/**
 * @ngdoc controller
 * @name app.controller:mainController
 * @description
 * Controller for main module
 *
 */
function mainController () {

	var vm = this;

	vm.name = 'sayHello';
	vm.sayHello = sayHello;

	/**
	 * @ngdoc method
	 * @name sayHello   
	 * @methodOf app.controller:mainController   
	 * @description 
	 * function for say ´hello´ + name
	 * @param  {String} name name to say
	 * @public
	 */
	function sayHello( name ) {
		return 'Hello ' + name;
	}
} 