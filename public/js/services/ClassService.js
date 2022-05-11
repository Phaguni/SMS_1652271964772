/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/ClassCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */


app.factory('ClassService', ['$resource', '$rootScope', 'ClassServiceCustom',
  function($resource, $rootScope, ClassServiceCustom){
    return $resource( $rootScope.baseUrl + "/class/:_id", {_id:'@_id'}, $.extend({
        'findBy_Teachers': { 
        	url: $rootScope.baseUrl + '/class/findBy_Teachers/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByclass': { 
        	url: $rootScope.baseUrl + '/class/findByclass/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByclassteacher': { 
        	url: $rootScope.baseUrl + '/class/findByclassteacher/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Teachers': { 
        	url: $rootScope.baseUrl + '/class/:id/get_Teachers',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
    }, ClassServiceCustom));
}]);