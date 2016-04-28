app
    .controller('MainController', function ($scope, notify) {
    	$scope.newObject = {};
		$scope.formFields = [
			{
				'fieldType': 'text',
				'name': 'userName',
				'title': 'Name',
				'validity': true
			},
			{
				'fieldType': 'email',
				'name': 'email',
				'title': 'email',
				'validity': true
			},
			{
				'fieldType': 'number',
				'name': 'phone',
				'title': 'phone',
				'validity': true
			},
			{
				'fieldType': 'password',
				'name': 'password',
				'title': 'password',
				'validity': true
			},
			{
				'fieldType': 'select',
				'name': 'selectOption',
				'title': 'Please select option',
				'options': [
					{name:'blah'},
					{name:'blah1'},
					{name:'blah2'}
				],
				'validity': true
			}
		];  
		$scope.submitForm = function() {
			$('#modal-form').modal('hide');
			notify({"message": " Submit Data Successful", "classes": "alert-success"});
		};      
    });