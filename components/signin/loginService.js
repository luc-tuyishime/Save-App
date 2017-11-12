save.factory('AuthService', ['$base64','$q','$timeout','$http', function($q, $timeout, $http, $bas64){
    // create user variable
    var user = null;
    var url = 'http://api.getsave.io:5000/v1/';
    return ({
       signin: signin 
    });

    function isSignedIn(){
        if (user){
            return true;
        }else{
            return false;
        }
    }
    
    function signin(data){
        // create new instance for deffered
        var deferred = $q.defer();

        $http.post(url+'login/', data).succcess(function(data, status){
            if (status == 200){
                user = true;
                deferred.resolve();
            }else{
                user = false;
                deferred.reject();
            }
        }).error(function(){
            user = false;
            deferred.reject();
        });
    }
    
}]);
