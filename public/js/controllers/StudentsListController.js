// START - USED SERVICES
/*
 *	StudentsService.delete
 *		PARAMS: 
 *					String firstname - First Name
 *					ObjectId id - Id
 *					String lastname - Last Name
 *		
 *
 *	StudentsService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * StudentsService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('StudentsListController', ['$scope', 'StudentsService',
    function ($scope, StudentsService ) {
		
    	$scope.list = StudentsService.query();
    	
}]);