'use strict';

angular.module('broserverApp')
    .controller('NavbarController', function ($scope, $location, $state, $mdDialog, Auth, Principal) {
    	
    	Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });    	
    	
    	$scope.$on('account:updated', function (event, account) {    	
    		$scope.account = account; 
    	});    	
    	
        $scope.$state = $state;
        $scope.notificationsEnabled = true;
        
        $scope.toggleNotifications = function () {
        	$scope.notificationsEnabled = !$scope.notificationsEnabled;        	
        };
        
        $scope.home = function () {
        	$state.go('home');
        }
        
        $scope.register = function () {
        	$state.go('register');
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
        	        .title('You tryna pick a theme?')
        	        .content('Come inspect my wares...')
        	        .ok('Nice one!')
        	);
        };
        
    });
