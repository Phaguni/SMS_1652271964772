// START - USED SERVICES
/*
 *	LessonsService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	LessonsService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * LessonsService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('LessonsListController', ['$scope', 'LessonsService',
    function ($scope, LessonsService ) {
		
    	$scope.list = LessonsService.query();
    	
}]);