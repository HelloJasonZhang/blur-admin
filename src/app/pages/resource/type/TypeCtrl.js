/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.restype')
        .controller('TypeCtrl', TypeCtrl);

    /** @ngInject */
    function TypeCtrl($scope, ResourceTemplate) {
 console.log("========TypeCtrl==========");
        $scope.gridOptions = {
            enableSorting: true,
            enableFiltering: true,
            enableRowSelection: true,
            enableSelectAll: true,
            multiSelect: true,
            selectionRowHeaderWidth: 35,
            enableGridMenu: true,
            rowHeight: 35,
            showGridFooter: true,
            onRegisterApi: function(gridApi) {
                $scope.gridApi = gridApi; //register UI grid API
            },
/*            columnDefs: [
                { field: 'name' },
                { field: 'gender' },
                { field: 'company', enableSorting: false }
            ],*/
        };
        ResourceTemplate.query({}, function(data) {
           
            $scope.resourceTypes = data;
            $scope.gridOptions.data = data
            console.log($scope.gridOptions);
        }, function(error) {
            console.log(error);
        });

    }

})();
