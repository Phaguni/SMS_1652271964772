// START - USED SERVICES
/*
 *	LessonsService.create
 *		PARAMS: 
 *		
 *
 *	LessonsService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	LessonsService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	TestService.findBy_Lessons
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	SubjectsService.list
 *		PARAMS: 
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
 * LessonsService  
 * SubjectsService  
 * TeachersService  
 * TestService  
 */
// END - REQUIRED RESOURCES

app.controller('LessonsEditController', ['$scope', '$location', '$routeParams', '$q', 'LessonsService', 'SubjectsService', 'TeachersService', 'TestService', 'SubjectsService', 'TeachersService', 'TestService',
    function ($scope, $location, $routeParams, $q, LessonsService , SubjectsService , TeachersService , TestService , SubjectsService, TeachersService, TestService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = LessonsService.get({_id: $scope.id});
        	$scope.external._Test_Lessons = TestService.findBy_Lessons({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new LessonsService();
        	$scope.external._Test_Lessons = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/lessonses/');
    		});
    	}
    	
    	$scope.remove = function(){
    		LessonsService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/lessonses/');
    		});
    	}
    	
    		
        //manage relation _Subjects
        		
    	$scope.list_Subjects = SubjectsService.query();

    	$scope.contain_Subjects = function(item){
    		if (!$scope.obj._Subjects) return false;
    		return $scope.obj._Subjects.indexOf(item) != -1;
    	}
		    	
		$scope.add_Subjects = function(item){
			if(!$scope.obj._Subjects)
				$scope.obj._Subjects = [];
			$scope.obj._Subjects.push(item);
		}
		
		$scope.remove_Subjects = function(index){
			$scope.obj._Subjects.splice(index, 1);
		}
    		
        //manage relation _Teachers
        		
    	$scope.list_Teachers = TeachersService.query();

    	$scope.contain_Teachers = function(item){
    		if (!$scope.obj._Teachers) return false;
    		return $scope.obj._Teachers.indexOf(item) != -1;
    	}
		    	
		$scope.add_Teachers = function(item){
			if(!$scope.obj._Teachers)
				$scope.obj._Teachers = [];
			$scope.obj._Teachers.push(item);
		}
		
		$scope.remove_Teachers = function(index){
			$scope.obj._Teachers.splice(index, 1);
		}
    		
        //manage External relation _Lessons
        		
    	$scope.list_Test_Lessons = TestService.query();
    	
}]);