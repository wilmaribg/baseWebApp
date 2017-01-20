'use strict';

describe( 'Testing to app module', function () {
	
	var mainCtrl;

	beforeEach( angular.mock.module( 'app' ) );

	it( 'Its defined mainController', function () {
		expect( mainController ).toBeDefined();
	} );


	beforeEach( inject( function ( $controller ) {
		mainCtrl = $controller( 'mainController' );
	} ) );

	it( 'Say hello + $name', function () {
		expect( mainCtrl.sayHello( 'wilmar' ) ).toEqual( 'Hello wilmar' );
	} );


} );

