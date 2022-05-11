/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/ExamsCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */


app.factory('ExamsService', ['$resource', '$rootScope', 'ExamsServiceCustom',
  function($resource, $rootScope, ExamsServiceCustom){
    return $resource( $rootScope.baseUrl + "/exams/:_id", {_id:'@_id'}, $.extend({
        'findBy_Class': { 
        	url: $rootScope.baseUrl + '/exams/findBy_Class/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'findByclass': { 
        	url: $rootScope.baseUrl + '/exams/findByclass/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBydate': { 
        	url: $rootScope.baseUrl + '/exams/findBydate/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBydone': { 
        	url: $rootScope.baseUrl + '/exams/findBydone/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByexamname': { 
        	url: $rootScope.baseUrl + '/exams/findByexamname/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findByroomno': { 
        	url: $rootScope.baseUrl + '/exams/findByroomno/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBysession': { 
        	url: $rootScope.baseUrl + '/exams/findBysession/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'findBysubjectname': { 
        	url: $rootScope.baseUrl + '/exams/findBysubjectname/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
        'get_Teachers': { 
        	url: $rootScope.baseUrl + '/exams/:id/get_Teachers',
        	method: 'GET',
        	isArray: true,
        	params: {
        		 
        	}
        },
    }, ExamsServiceCustom));
}]);