(function(){
	'use strict';

	angular.module('TestAssignment').controller('MainController', MainController);
    MainController.$inject = ['$scope','APIService','notify','$rootScope', '$location'];

    angular.module('TestAssignment').controller('SignUpController', SignUpController);
    SignUpController.$inject = ['$location','$scope','APIService','notify','$rootScope'];

    angular.module('TestAssignment').controller('SettingsController', SettingsController);
    SettingsController.$inject = ['$scope','APIService','notify','$rootScope'];

    function MainController($scope,APIService,notify,$rootScope, $location){
    	if($rootScope.isLogin == undefined) {
    		$rootScope.isLogin = false;	
    	}
		$scope.currentTab = '';

		$scope.onClickTab = function (tabUrl, id, $event) {
			if($event !== undefined) {
				$event.defaultPrevented = true;
			}
			$scope.currentTab = tabUrl;
			if(id !== undefined) {
				$('html,body').animate({
					scrollTop:   $(id).offset().top
				}, 800);
			}
		};

		$rootScope.isLogedin = function() {
			$rootScope.isLogin = true;
			$('#logIn').modal('hide');
		};        
    }

    function SignUpController($location,$scope,APIService,notify,$rootScope){
    	$scope.currentTab = 'tab1';
		
		$scope.onClickTab = function (tabUrl) {
			$scope.currentTab = tabUrl;
		};

		$scope.isSignupAsCompany = function() {
	
		};
		$scope.isSignupAsResearch = function() {
            
        };
    }

    function SettingsController($scope,APIService,notify,$rootScope){
    	$scope.showBankForm = false;
		$scope.tabs = [{
			title: 'Profile',
			url: 'profileForm'
			}, {
			title: 'Account',
			url: 'accountForm'
			}, {
			title: 'Payments',
			url: 'payments'
			},
			{
			title: 'Team',
			url: 'team'
			}
		];

		$scope.currentTab = 'profileForm';

		$scope.onClickTab = function (tabUrl) {
			$scope.currentTab = tabUrl;
		};

		$scope.isActiveTab = function(tabUrl) {
			return tabUrl == $scope.currentTab;
		};
		$scope.newObject = {};
		$scope.formFields = [
			{
				'fieldType': 'text',
				'name': 'acName',
				'title': 'Account Name',
				'validity': true
			},
			{
				'fieldType': 'number',
				'name': 'acNumber',
				'title': 'A/C Number',
				'validity': true
			},
			{
				'fieldType': 'text',
				'name': 'bankName',
				'title': 'Bank Name',
				'validity': true
			},
			{
				'fieldType': 'text',
				'name': 'ifscCode',
				'title': 'IFSC Code',
				'validity': true
			},
			{
				'fieldType': 'text',
				'name': 'panNumber',
				'title': 'PAN number',
				'validity': true
			}
		];
		$scope.showBankDetail = function() {
			$scope.showBankForm = true;
		}; 
    }
})();
