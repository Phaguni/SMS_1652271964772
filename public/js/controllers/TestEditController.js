// START - USED SERVICES
/*
 *	TestService.create
 *		PARAMS: 
 *		
 *
 *	TestService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *					Number lessonno - Lesson Number
 *		
 *
 *	TestService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	LessonsService.list
 *		PARAMS: 
 *		
 *
 *	TeachersService.list
 *		PARAMS: 
 *		
 *
 *	SubjectsService.list
 *		PARAMS: 
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
 * LessonsService  
 * SubjectsService  
 * TeachersService  
 * TestService  
 */
// END - REQUIRED RESOURCES

app.controller('TestEditController', ['$scope', '$location', '$routeParams', '$q', 'ClassService', 'LessonsService', 'SubjectsService', 'TeachersService', 'TestService', 'ClassService', 'LessonsService', 'SubjectsService', 'TeachersService',
    function ($scope, $location, $routeParams, $q, ClassService , LessonsService , SubjectsService , TeachersService , TestService , ClassService, LessonsService, SubjectsService, TeachersService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = TestService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new TestService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/tests/');
    		});
    	}
    	
    	$scope.remove = function(){
    		TestService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/tests/');
    		});
    	}
    	
    		
        //manage relation _Class
        		
    	$scope.list_Class = ClassService.query();

    	$scope.contain_Class = function(item){
    		if (!$scope.obj._Class) return false;
    		return $scope.obj._Class.indexOf(item) != -1;
    	}
		    	
		$scope.add_Class = function(item){
			if(!$scope.obj._Class)
				$scope.obj._Class = [];
			$scope.obj._Class.push(item);
		}
		
		$scope.remove_Class = function(index){
			$scope.obj._Class.splice(index, 1);
		}
    		
        //manage relation _Lessons
        		
    	$scope.list_Lessons = LessonsService.query();

    	$scope.contain_Lessons = function(item){
    		if (!$scope.obj._Lessons) return false;
    		return $scope.obj._Lessons.indexOf(item) != -1;
    	}
		    	
		$scope.add_Lessons = function(item){
			if(!$scope.obj._Lessons)
				$scope.obj._Lessons = [];
			$scope.obj._Lessons.push(item);
		}
		
		$scope.remove_Lessons = function(index){
			$scope.obj._Lessons.splice(index, 1);
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
}]);