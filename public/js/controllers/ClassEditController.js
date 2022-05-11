// START - USED SERVICES
/*
 *	ClassService.create
 *		PARAMS: 
 *		
 *
 *	ClassService.update
 *		PARAMS: 
 *					Number class - Class
 *					ObjectId id - Id
 *		
 *
 *	ClassService.get
 *		PARAMS: 
 *					Number class - Class
 *					ObjectId id - Id resource
 *		
 *
 *	StudentsService.findBy_Class
 *		PARAMS: 
 *					Number class - Class
 *		
 *
 *	TeachersService.findBy_Class
 *		PARAMS: 
 *					Number class - Class
 *		
 *
 *	ExamsService.findBy_Class
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	TestService.findBy_Class
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ClassService  
 * ExamsService  
 * StudentsService  
 * TeachersService  
 * TestService  
 */
// END - REQUIRED RESOURCES

app.controller('ClassEditController', ['$scope', '$location', '$routeParams', '$q', 'ClassService', 'ExamsService', 'StudentsService', 'TeachersService', 'TestService', 'TeachersService', 'SubjectsService', 'TestService', 'ExamsService', 'TeachersService', 'StudentsService',
    function ($scope, $location, $routeParams, $q, ClassService , ExamsService , StudentsService , TeachersService , TestService , TeachersService, SubjectsService, TestService, ExamsService, TeachersService, StudentsService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = ClassService.get({_id: $scope.id});
        	$scope.external._Subjects_Class = SubjectsService.findBy_Class({key: $scope.id});
        	$scope.external._Test_Class = TestService.findBy_Class({key: $scope.id});
        	$scope.external._Exams_Class = ExamsService.findBy_Class({key: $scope.id});
        	$scope.external._Teachers_Class = TeachersService.findBy_Class({key: $scope.id});
        	$scope.external._Students_Class = StudentsService.findBy_Class({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new ClassService();
        	$scope.external._Subjects_Class = [];
        	$scope.external._Test_Class = [];
        	$scope.external._Exams_Class = [];
        	$scope.external._Teachers_Class = [];
        	$scope.external._Students_Class = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/classes/');
    		});
    	}
    	
    	$scope.remove = function(){
    		ClassService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/classes/');
    		});
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
    		
        //manage External relation _Class
        		
    	$scope.list_Subjects_Class = SubjectsService.query();
    	
    		
        //manage External relation _Class
        		
    	$scope.list_Test_Class = TestService.query();
    	
    		
        //manage External relation _Class
        		
    	$scope.list_Exams_Class = ExamsService.query();
    	
    		
        //manage External relation _Class
        		
    	$scope.list_Teachers_Class = TeachersService.query();
    	
    		
        //manage External relation _Class
        		
    	$scope.list_Students_Class = StudentsService.query();
    	
}]);