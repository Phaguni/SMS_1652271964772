// START - USED SERVICES
/*
 *	SubjectsService.create
 *		PARAMS: 
 *		
 *
 *	SubjectsService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *					String name - Name
 *		
 *
 *	SubjectsService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *					String name - Name
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * SubjectsService  
 */
// END - REQUIRED RESOURCES

app.controller('SubjectsEditController', ['$scope', '$location', '$routeParams', '$q', 'SubjectsService', 'ClassService', 'TeachersService', 'ExamsService', 'LessonsService', 'TestService',
    function ($scope, $location, $routeParams, $q, SubjectsService , ClassService, TeachersService, ExamsService, LessonsService, TestService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = SubjectsService.get({_id: $scope.id});
        	$scope.external._Exams_Subjects = ExamsService.findBy_Subjects({key: $scope.id});
        	$scope.external._Lessons_Subjects = LessonsService.findBy_Subjects({key: $scope.id});
        	$scope.external._Test_Subjects = TestService.findBy_Subjects({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new SubjectsService();
        	$scope.external._Exams_Subjects = [];
        	$scope.external._Lessons_Subjects = [];
        	$scope.external._Test_Subjects = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/subjectses/');
    		});
    	}
    	
    	$scope.remove = function(){
    		SubjectsService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/subjectses/');
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
    		
        //manage External relation _Subjects
        		
    	$scope.list_Exams_Subjects = ExamsService.query();
    	
    		
        //manage External relation _Subjects
        		
    	$scope.list_Lessons_Subjects = LessonsService.query();
    	
    		
        //manage External relation _Subjects
        		
    	$scope.list_Test_Subjects = TestService.query();
    	
}]);