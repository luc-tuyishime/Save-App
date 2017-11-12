save.controller('signinCtrl', function($scope, $location, AuthService){
    $scope.signin = function(){
        console.log($scope.user);
        AuthService.signin(JSON.stringify($scope.user))
                   .then(function(){
                       console.log("login");
                   })
                   .catch(function(){
                       console.log("not login");
                   });
    }
})
