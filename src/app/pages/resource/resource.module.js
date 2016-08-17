/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.restype', [
            'ui.grid',
            'ui.grid.selection',
            'ui.grid.resizeColumns',
            'ui.grid.pinning',
            'ui.grid.autoResize',
            'ui.grid.edit',
            'ui.grid.rowEdit',
            'ui.grid.cellNav',
            'ui.grid.validate',
            'ui.grid.pagination'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('resources', {
                url: '/resources',
                template: '<ui-view></ui-view>',
                abstract: true,
                title: 'Resources',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 300,
                },
            })
            .state('resources.type', {
                url: '/types',
                controller: 'TypeCtrl',
                templateUrl: 'app/pages/resource/type/type.html',
                title: 'Resource Types',
                sidebarMeta: {
                    order: 0,
                },
            })            
            .state('resources.createtype', {
                url: '/types/:id',
                controller: 'TypeCtrl',
                templateUrl: 'app/pages/resource/type/type.detail.html',
                title: 'Resource Type'
            });
    }
})();
