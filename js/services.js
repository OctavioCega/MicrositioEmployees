angular.module("FinalApp")
.factory("EmployeeResource",function($http){
    var getEmployeesUrl = "http://dummy.restapiexample.com/api/v1/employees";
    var getEmployeeUrl = "http://dummy.restapiexample.com/api/v1/employee/";
    var postEmployeeUrl = "http://dummy.restapiexample.com/api/v1/create";
    var updateEmployeeUrl = "http://dummy.restapiexample.com/api/v1/update/"
    var deleteEmployeeUrl = "http://dummy.restapiexample.com/api/v1/delete/";
    //Me baso en el video 
    //https://www.youtube.com/watch?v=DYZ2jQxxKfI&list=PLhymOpdHzdWJSCfGdx5NAtrU6jjZjGEyE&index=3&t=6s
    //Aplico una estructura similar en el service
    var EmployeeResource ={

        getEmployees: function(){
            //ojo es get
            return $http.get(getEmployeesUrl).success(function(data){
                return data;
            })
            .error(function(err){
                console.log(err);
            })
        },
        getEmployee: function(employee){
            return $http.get(getEmployeeUrl + employee.id).success(function(data){
                return data;
            })
            .error(function(err){
                console.log(err);
            })
        },
        createEmployee: function(employee){
            return $http.post(postEmployeeUrl,employee).success(function(data){
                return data;
            })
            .error(function(err){
                console.log(err);
            })
        },
        updateEmployee: function(employee){
            return $http.put(updateEmployeeUrl + employee.id,employee).success(function(data){
                return data;
            })
            .error(function(err){
                console.log(err);
            })
        },
        //Me baso en https://www.youtube.com/watch?v=D7P4NrXT_T8
        //min 6:58 para saber como pasar parametros a la url
        //era mas facil de lo que pensaba :v
        deleteEmployee: function(employee){
            return $http.delete(deleteEmployeeUrl + employee.id).success(function(data){
                return data;
            })
            .error(function(err){
                console.log(err);
            })
        }
    };
    return EmployeeResource;
})
;