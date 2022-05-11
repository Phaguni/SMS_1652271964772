// START - USED SERVICES
/*
 *	TeachersService.create
 *		PARAMS: 
 *		
 *
 *	TeachersService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	TeachersService.get
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
 * TeachersService  
 */
// END - REQUIRED RESOURCES

app.controller('TeacherEditController', ['$scope', '$location', '$routeParams', '$q', 'TeachersService', 'ClassService', 'ExamsService', 'SubjectsService', 'ExamsService', 'LessonsService', 'ClassService', 'TestService',
    function ($scope, $location, $routeParams, $q, TeachersService , ClassService, ExamsService, SubjectsService, ExamsService, LessonsService, ClassService, TestService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = TeachersService.get({_id: $scope.id});
        	$scope.external._Subjects_Teachers = SubjectsService.findBy_Teachers({key: $scope.id});
        	$scope.external._Exams_Teachers = ExamsService.findBy_Teachers({key: $scope.id});
        	$scope.external._Lessons_Teachers = LessonsService.findBy_Teachers({key: $scope.id});
        	$scope.external._Class_Teachers = ClassService.findBy_Teachers({key: $scope.id});
        	$scope.external._Test_Teachers = TestService.findBy_Teachers({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new TeachersService();
        	$scope.external._Subjects_Teachers = [];
        	$scope.external._Exams_Teachers = [];
        	$scope.external._Lessons_Teachers = [];
        	$scope.external._Class_Teachers = [];
        	$scope.external._Test_Teachers = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/teachers/');
    		});
    	}
    	
    	$scope.remove = function(){
    		TeachersService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/teachers/');
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
    		
        //manage External relation _Teachers
        		
    	$scope.list_Subjects_Teachers = SubjectsService.query();
    	
    		
        //manage External relation _Teachers
        		
    	$scope.list_Exams_Teachers = ExamsService.query();
    	
    		
        //manage External relation _Teachers
        		
    	$scope.list_Lessons_Teachers = LessonsService.query();
    	
    		
        //manage External relation _Teachers
        		
    	$scope.list_Class_Teachers = ClassService.query();
    	
    		
        //manage External relation _Teachers
        		
    	$scope.list_Test_Teachers = TestService.query();
    	
}]);