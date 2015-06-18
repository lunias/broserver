'use strict';

angular.module('broserverApp')
    .controller('NavbarController', function ($scope, $location, $state, $mdDialog, Auth, Principal) {
    	
        $scope.isAuthenticated = Principal.isAuthenticated;
        $scope.$state = $state;
        $scope.notificationsEnabled = true;
        
        $scope.toggleNotifications = function () {
        	$scope.notificationsEnabled = !$scope.notificationsEnabled;        	
        };
        
        $scope.profile = function () {
        	$state.go('settings');
        };
        
        $scope.changePassword = function () {
        	$state.go('password');
        }
        
        $scope.loginOrOut = function () {
        	
        	if ($scope.isAuthenticated()) {
                Auth.logout();
                $state.go('home');
        	} else {
            	$state.go('login');	
        	}        	
        };
        
        $scope.changeTheme = function () {
        	$mdDialog.show(
        	    $mdDialog.alert()
        	        .title('You clicked!')
        	        .content('Pick a theme baby!')
        	        .ok('Nice')
        	);
        };
        
    });
