var app = angular.module('app',[]);
        app.controller('control',function($scope,$http){
         var cr = this;
            cr.details = function(user){
			$http.get('https://api.github.com/search/users?q='+user.name).then(function(res){
		    $scope.ele = res.data.items;
			localStorage.setItem('detail',JSON.stringify(res.data.items));
			
		})

	   }
	   $scope.count = function($index){
	   		$scope.ind = JSON.parse(localStorage.getItem('detail'));
	   		localStorage.setItem('person',JSON.stringify($scope.ind[$index]));
	   		$http.get($scope.ind[$index].repos_url).then(function(response){
		    $scope.entry = response.data;
		    console.log($scope.entry);
		    localStorage.setItem('repos',JSON.stringify($scope.entry));

	   })
	   }
	  	
	   })
        app.controller('contra',function($scope,$http){
        	$scope.row = JSON.parse(localStorage.getItem("person")); 
		  	$scope.ele = JSON.parse(localStorage.getItem('repos'));
			
        })
