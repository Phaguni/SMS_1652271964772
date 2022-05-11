// START - USED SERVICES
/*
 *	TestService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	TestService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * TestService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('TestListController', ['$scope', 'TestService',
    function ($scope, TestService ) {
		
    	$scope.list = TestService.query();
    	
}]);