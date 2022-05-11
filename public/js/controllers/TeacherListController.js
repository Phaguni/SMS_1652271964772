// START - USED SERVICES
/*
 *	TeachersService.delete
 *		PARAMS: 
 *					String firstname - First Name
 *					ObjectId id - Id
 *					String lastname - Last Name
 *		
 *
 *	TeachersService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * TeachersService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('TeacherListController', ['$scope', 'TeachersService',
    function ($scope, TeachersService ) {
		
    	$scope.list = TeachersService.query();
    	
}]);