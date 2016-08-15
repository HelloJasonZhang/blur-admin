(function() {
    'use strict';

    // register the service as ResourceTemplate
    angular
        .module('BlurAdmin.pages.tables')
        .factory('ResourceTemplate', ResourceTemplate);

    /**
     * @description
     * ResourceTemplate resource constructor
     *
     * @param {Service} $resource The resource service to use
     * @returns {Service} ResourceTemplate
     */


    /** @ngInject */
    function ResourceTemplate($resource, Constants) {
        // factory members
        var methods = {
            'update': {
                'method': 'PUT',
                'headers': Constants.HEADERS,

            },
            'save': {
                'method': 'POST',
                'headers': Constants.HEADERS,
            },
            'query': {
                'method': 'GET',
                'headers': Constants.HEADERS,
                'isArray': true
            }
        };

        return $resource("http://192.168.1.109:8000/zlims" + Constants.RESOURCE_TYPE_API, {}, methods);
    }

})();
