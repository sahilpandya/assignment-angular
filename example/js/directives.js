app
    .directive('modal', function() {
        return {
            restrict: 'E',
            templateUrl: 'assets/template/modal.html',
            link: function(scope, element, attr) {
                console.log(scope);
            }
        };
    });
  
