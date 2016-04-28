(function(){
	'use strict';
	
	angular.module('TestAssignment')
		   .service('APIService',APIService);
	APIService.$inject = ['$http', '$q', '$rootScope'];

	function APIService($http, $q, $rootScope){
	}
})();
