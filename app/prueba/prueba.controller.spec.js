'use strict';

describe( 'Testing to prueba module', function () {
	
	var mainCtrl;

	beforeEach( angular.mock.module( 'prueba' ) );

	it( 'Its defined mainController', function () {
		expect( pruebaController ).toBeDefined();
	} );


	beforeEach( inject( function ( $controller ) {
		mainCtrl = $controller( 'mainController' );
	} ) );

	it( 'Say hello + $name', function () {
		expect( mainCtrl.sayHello( 'wilmar' ) ).toEqual( 'Hello wilmar' );
	} );


} );
