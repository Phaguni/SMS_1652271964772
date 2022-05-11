/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/SubjectsCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */


app.factory('SubjectsService', ['$resource', '$rootScope', 'SubjectsServiceCustom',
  function($resource, $rootScope, SubjectsServiceCustom){
    return $resource( $rootScope.baseUrl + "/subjects/:_id", {_id:'@_id'}, $.extend({
        'findBy_Class': { 
        	url: $rootScope.baseUrl + '/subjects/findBy_Class/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBy_Teachers': { 
        	url: $rootScope.baseUrl + '/subjects/findBy_Teachers/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByclass': { 
        	url: $rootScope.baseUrl + '/subjects/findByclass/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByname': { 
        	url: $rootScope.baseUrl + '/subjects/findByname/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByteacher': { 
        	url: $rootScope.baseUrl + '/subjects/findByteacher/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Class': { 
        	url: $rootScope.baseUrl + '/subjects/:id/get_Class',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Teachers': { 
        	url: $rootScope.baseUrl + '/subjects/:id/get_Teachers',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
    }, SubjectsServiceCustom));
}]);