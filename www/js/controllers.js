angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Matching calendars free time;', id: 1 },



  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


function saveRegister(){
                    var fname= document.getElementById("fname").value;
                    localStorage.setItem('fname', fname);
                    var lname= document.getElementById("lname").value;
                    localStorage.setItem('lname', lname);
                    var email= document.getElementById("email").value;
                    localStorage.setItem('email', email);
                    var password= document.getElementById("password").value;
                    localStorage.setItem('password', password);
                    var cpassword= document.getElementById("cpassword").value;
                    localStorage.setItem('cpassword', cpassword);

                }

function saveLogin(){            
                    var email= document.getElementById("email").value;
                    localStorage.setItem('email', email);
                    var password= document.getElementById("password").value;
                    localStorage.setItem('password', password);
                }




function setValueRegister(){
        var fname = localStorage.getItem('fname');
        var lname = localStorage.getItem('lname');
        var email = localStorage.getItem('email');
        var password = localStorage.getItem('password');
        var cpassword = localStorage.getItem('cpassword');
        document.getElementById("fname").value = fname;
        document.getElementById("lname").value = lname;
        document.getElementById("email").value = email;
        document.getElementById("password").value = password;
        document.getElementById("cpassword").value = cpassword;
}


function setValueLogin(){        
        var email = localStorage.getItem('email');
        var password = localStorage.getItem('password');
        document.getElementById("email").value = email;
        document.getElementById("password").value = password;
}

