// START - USED SERVICES
/*
 *	ExamsService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *					String subjectname - Subject Name
 *		
 *
 *	ExamsService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ExamsService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('ExamsListController', ['$scope', 'ExamsService',
    function ($scope, ExamsService ) {
		
    	$scope.list = ExamsService.query();
    	
}]);