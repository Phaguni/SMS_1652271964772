/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/TeachersCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */


app.factory('TeachersService', ['$resource', '$rootScope', 'TeachersServiceCustom',
  function($resource, $rootScope, TeachersServiceCustom){
    return $resource( $rootScope.baseUrl + "/teacher/:_id", {_id:'@_id'}, $.extend({
        'findBy_Class': { 
        	url: $rootScope.baseUrl + '/teacher/findBy_Class/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBy_Exams': { 
        	url: $rootScope.baseUrl + '/teacher/findBy_Exams/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByclass': { 
        	url: $rootScope.baseUrl + '/teacher/findByclass/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByfirstname': { 
        	url: $rootScope.baseUrl + '/teacher/findByfirstname/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBylastname': { 
        	url: $rootScope.baseUrl + '/teacher/findBylastname/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Class': { 
        	url: $rootScope.baseUrl + '/teacher/:id/get_Class',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Exams': { 
        	url: $rootScope.baseUrl + '/teacher/:id/get_Exams',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
    }, TeachersServiceCustom));
}]);