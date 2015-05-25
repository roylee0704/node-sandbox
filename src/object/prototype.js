/**
 * Sandbox for toy-ing with javascript __proto__ <internal-prototype>
 *
 *
 * @author Roy Lee <roylee0704@gmail.com>
 *
 * (C) 2015 Mit Style License
 *
 */


'use strict';

function log(desc, result) {
	console.log('\''+ desc + '\'  -> ', result);
}

(function Prototype_Equality(){


	//Object is a constructor
	log('Object ->', Object);


	/**
	 *  @note
	 *  Instance that is instantiated from a Constructor
	 *  has its __proto__ assigned as Constructor.prototype
	 */
	var node = {
		value: '1'
	};

	log('node.__proto__ === Object.prototype', node.__proto__ === Object.prototype);

	log('node.__proto__ === {}.__proto__', node.__proto__ === {}.__proto__);

	log('node.__proto__ === Object', node.__proto__ === Object);

}());





