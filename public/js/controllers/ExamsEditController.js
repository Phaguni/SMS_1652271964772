// START - USED SERVICES
/*
 *	ExamsService.create
 *		PARAMS: 
 *		
 *
 *	ExamsService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *					String subjectname - Subject Name
 *		
 *
 *	ExamsService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *					String subjectname - Subject Name
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ExamsService  
 */
// END - REQUIRED RESOURCES

app.controller('ExamsEditController', ['$scope', '$location', '$routeParams', '$q', 'ExamsService', 'ClassService', 'SubjectsService', 'TeachersService', 'TeachersService', 'StudentsService',
    function ($scope, $location, $routeParams, $q, ExamsService , ClassService, SubjectsService, TeachersService, TeachersService, StudentsService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = ExamsService.get({_id: $scope.id});
        	$scope.external._Teachers_Exams = TeachersService.findBy_Exams({key: $scope.id});
        	$scope.external._Students_Exams = StudentsService.findBy_Exams({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new ExamsService();
        	$scope.external._Teachers_Exams = [];
        	$scope.external._Students_Exams = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/examses/');
    		});
    	}
    	
    	$scope.remove = function(){
    		ExamsService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/examses/');
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
    		
        //manage External relation _Exams
        		
    	$scope.list_Teachers_Exams = TeachersService.query();
    	
    		
        //manage External relation _Exams
        		
    	$scope.list_Students_Exams = StudentsService.query();
    	
}]);