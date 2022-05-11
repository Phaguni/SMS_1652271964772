// START - USED SERVICES
/*
 *	StudentsService.create
 *		PARAMS: 
 *		
 *
 *	StudentsService.update
 *		PARAMS: 
 *					String firstname - First Name
 *					ObjectId id - Id
 *					String lastname - Last Name
 *		
 *
 *	StudentsService.get
 *		PARAMS: 
 *					String firstname - First Name
 *					ObjectId id - Id resource
 *					String lastname - Last Name
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * StudentsService  
 */
// END - REQUIRED RESOURCES

app.controller('StudentsEditController', ['$scope', '$location', '$routeParams', '$q', 'StudentsService', 'ClassService', 'ExamsService',
    function ($scope, $location, $routeParams, $q, StudentsService , ClassService, ExamsService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = StudentsService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new StudentsService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/studentses/');
    		});
    	}
    	
    	$scope.remove = function(){
    		StudentsService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/studentses/');
    		});
    	}
    	
    		
        //manage relation _Class
        		
    	$scope.list_Class = ClassService.query();

    		
        //manage relation _Exams
        		
    	$scope.list_Exams = ExamsService.query();

    	$scope.contain_Exams = function(item){
    		if (!$scope.obj._Exams) return false;
    		return $scope.obj._Exams.indexOf(item) != -1;
    	}
		    	
		$scope.add_Exams = function(item){
			if(!$scope.obj._Exams)
				$scope.obj._Exams = [];
			$scope.obj._Exams.push(item);
		}
		
		$scope.remove_Exams = function(index){
			$scope.obj._Exams.splice(index, 1);
		}
}]);