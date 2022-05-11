/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/StudentsCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */


app.factory('StudentsService', ['$resource', '$rootScope', 'StudentsServiceCustom',
  function($resource, $rootScope, StudentsServiceCustom){
    return $resource( $rootScope.baseUrl + "/students/:_id", {_id:'@_id'}, $.extend({
        'findBy_Class': { 
        	url: $rootScope.baseUrl + '/students/findBy_Class/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByclass': { 
        	url: $rootScope.baseUrl + '/students/findByclass/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByfirstname': { 
        	url: $rootScope.baseUrl + '/students/findByfirstname/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBylastname': { 
        	url: $rootScope.baseUrl + '/students/findBylastname/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByrollno': { 
        	url: $rootScope.baseUrl + '/students/findByrollno/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Class': { 
        	url: $rootScope.baseUrl + '/students/:id/get_Class',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Exams': { 
        	url: $rootScope.baseUrl + '/students/:id/get_Exams',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
    }, StudentsServiceCustom));
}]);