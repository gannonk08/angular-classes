(function() {
  'use strict';
  var app = angular.module('teacherApp', ['ngMessages']);

  app.controller("formPoster", function($scope,$rootScope){

    $rootScope.classes = [{className: "Math", teacherName: "Eddie Sanchez"},{className: "Science", teacherName: "Steven Joben"}, {className: "history", teacherName: "Oldman River"}]

    $rootScope.students = [{studentName: "Billy", classes: [{class: "Math",grade: "C-"},{class: "Science",grade: "A-"}]}, {studentName: "Joben", classes: [{class: "Science",grade: "A"},{class: "History",grade:"B-"}]}, {studentName: "Rodrigo", classes: [{class:"History", grade: "D-"},{class: "Math",grade: "A+"}]}]



    $scope.createClass = function(className, teacherName) {
      var classArray = $rootScope.classes;
      console.log("create class clicked");
      $scope.className = ""
      $scope.teacherName = ""
      return addClass(className, teacherName, classArray)
    };

    $scope.createStudent = function(studentName, studentClass) {
      var studentsArray = $rootScope.students;
      $scope.studentName = "";
      $scope.studentClass = "";
      console.log("add student clicked");
      return addStudent(studentName, studentClass, studentsArray)
    };

  })

  function addClass(className, teacherName, classArray) {
    return classArray.push({className: className, teacherName: teacherName})
  }

  function addStudent(studentName, studentClass, studentArray) {
  return studentArray.push({studentName: studentName, classes: [{class: studentClass, grade: "C"}]})
  }

}());
