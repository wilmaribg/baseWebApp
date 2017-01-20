'use strict';

angular
	.module( 'prueba' )
	.controller( 'pruebaController', pruebaController );

/**
 * @ngdoc controller
 * @name prueba.controller:pruebaController
 * @description
 * Controller for main module
 *
 */
function pruebaController () {

	var vm = this;

	vm.sayHello = sayHello;

	/**
	 * @ngdoc method
	 * @name sayHello   
	 * @methodOf prueba.controller:pruebaController   
	 * @description 
	 * function for say ´hello´ + name
	 * @param  {String} name name to say
	 * @public
	 */
	function sayHello( name ) {
		console.log( 'Hello ' + name );
	}
} 