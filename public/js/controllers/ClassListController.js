// START - USED SERVICES
/*
 *	ClassService.delete
 *		PARAMS: 
 *					Number class - Class
 *					ObjectId id - Id
 *		
 *
 *	ClassService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ClassService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('ClassListController', ['$scope', 'ClassService',
    function ($scope, ClassService ) {
		
    	$scope.list = ClassService.query();
    	
}]);