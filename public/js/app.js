

var app = angular.module('SMS_App', [
'ngRoute',
'ngResource'
]).config(function ($routeProvider) {
	
	$routeProvider
	
//DO NOT EDIT THIS ROUTES, USE NEXT COMMENT SECTION

// START - ROUTE
	.when('/classes/:id', {
	  templateUrl: 'html/ClassEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/classes', {
	  templateUrl: 'html/ClassList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/examses/:id', {
	  templateUrl: 'html/ExamsEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/examses', {
	  templateUrl: 'html/ExamsList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/home', {
	  templateUrl: 'html/Home.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/lessonses/:id', {
	  templateUrl: 'html/LessonsEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/lessonses', {
	  templateUrl: 'html/LessonsList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/studentses/:id', {
	  templateUrl: 'html/StudentsEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/studentses', {
	  templateUrl: 'html/StudentsList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/subjectses/:id', {
	  templateUrl: 'html/SubjectsEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/subjectses', {
	  templateUrl: 'html/SubjectsList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/teachers/:id', {
	  templateUrl: 'html/TeacherEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/teachers', {
	  templateUrl: 'html/TeacherList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/tests/:id', {
	  templateUrl: 'html/TestEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/tests', {
	  templateUrl: 'html/TestList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/users/:id', {
	  templateUrl: 'html/UserEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole([ 'ADMIN', ]); }]
	  },
	})
	.when('/users', {
	  templateUrl: 'html/UserList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole([ 'ADMIN', ]); }]
	  },
	})

// END - ROUTE

// INSERT HERE YOUR CUSTOM ROUTES
		

// DEFAULT ROUTES
    .when('/profile', {
      templateUrl: 'js/security/profile/Profile.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
      },
    })
    .when('/manage-users', {
      templateUrl: 'js/security/manageUser/UsersList.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole("ADMIN"); }]
      },
    })
    .when('/manage-users/:id', {
      templateUrl: 'js/security/manageUser/UsersEdit.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole("ADMIN"); }]
      },
    })
	.when('/login', {
	    templateUrl: 'html/Login.html',
	    controller: 'LoginController'
	})
	.when('/logout', {
	      templateUrl: 'html/Login.html',
	      controller: 'LogoutController',
    	  resolve: {
    		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
    	  },
	})
	.when('/', {
	      templateUrl: 'html/Home.html',
    	  resolve: {
    		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
    	  },
	})
	.otherwise({
		templateUrl: 'html/404.html',
	});
	
});