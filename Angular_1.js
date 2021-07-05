var myApp = angular.module("myApp", [])
myApp.controller("myCtrl", function($scope){
    $scope.msg = 'Anubhav';
    $scope.xlist = [
        {
            "name" : "AK47",
            "price" : 10000,
            "quantity" : 0,
            "amount" : 0,
        },
        {
            
            "name" : "Drangonov",
            "price" : 50000,
            "quantity" : 0,
            "amount" : 0
        },
        {
            
            "name" : "esniper",
            "price" : 10000000,
            "quantity" : 0,
            "amount" : 0
        }
    ];
    $scope.xvar = 24;
    $scope.inc = function(item){
        item.quantity += 1;
        $scope.getTotal();
    }
    $scope.dec = function(item){
        if(item.quantity>0)item.quantity -= 1;
        $scope.getTotal();
    }
    $scope.gtotal = 0;
    $scope.getTotal = function(){
        var res = 0;
        for(var i=0;i<$scope.xlist.length; i++){
            res += $scope.xlist[i].price*$scope.xlist[i].quantity;
        }
        $scope.gtotal = res;
    }
})