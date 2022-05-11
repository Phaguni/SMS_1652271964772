/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/TestCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */


app.factory('TestService', ['$resource', '$rootScope', 'TestServiceCustom',
  function($resource, $rootScope, TestServiceCustom){
    return $resource( $rootScope.baseUrl + "/test/:_id", {_id:'@_id'}, $.extend({
        'findBy_Class': { 
        	url: $rootScope.baseUrl + '/test/findBy_Class/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'findBy_Lessons': { 
        	url: $rootScope.baseUrl + '/test/findBy_Lessons/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'findBy_Subjects': { 
        	url: $rootScope.baseUrl + '/test/findBy_Subjects/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBy_Teachers': { 
        	url: $rootScope.baseUrl + '/test/findBy_Teachers/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByclass': { 
        	url: $rootScope.baseUrl + '/test/findByclass/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBydate': { 
        	url: $rootScope.baseUrl + '/test/findBydate/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBylessonno': { 
        	url: $rootScope.baseUrl + '/test/findBylessonno/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBysubjectname': { 
        	url: $rootScope.baseUrl + '/test/findBysubjectname/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByteacher': { 
        	url: $rootScope.baseUrl + '/test/findByteacher/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Class': { 
        	url: $rootScope.baseUrl + '/test/:id/get_Class',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Lessons': { 
        	url: $rootScope.baseUrl + '/test/:id/get_Lessons',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Subjects': { 
        	url: $rootScope.baseUrl + '/test/:id/get_Subjects',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Teachers': { 
        	url: $rootScope.baseUrl + '/test/:id/get_Teachers',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
    }, TestServiceCustom));
}]);