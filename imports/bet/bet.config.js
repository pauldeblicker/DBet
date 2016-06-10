class BetConfig {
    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('bet', {
                url: '/bet',
                views: {
                    'content@': {
                        template: '<bet-main></bet-main>'
                    }
                },
                resolve: {
                    currentUser($q) {
                        if (Meteor.userId() === null) {
                            return $q.reject('AUTH_REQUIRED');
                        } else {
                            return $q.resolve();
                        }
                    }
                }
            });
    }
}

export default BetConfig.initRoute;
