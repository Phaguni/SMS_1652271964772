// START - USED SERVICES
/*
 *	SubjectsService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *					String name - Name
 *		
 *
 *	SubjectsService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * SubjectsService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('SubjectsListController', ['$scope', 'SubjectsService',
    function ($scope, SubjectsService ) {
		
    	$scope.list = SubjectsService.query();
    	
}]);