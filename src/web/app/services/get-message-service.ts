namespace tsang.magic.services {
    import IDeferred = angular.IDeferred;
    import greeting = tsang.magic.classes.greeting;

    export interface IGetMessageService {
        requestMessage() : ng.IPromise<{}>;
    }

    export class GetMessageService implements IGetMessageService {
        private defer : ng.IDeferred<{}>;
        private fakeResponseTimer;

        constructor(private $q : ng.IQService) {
        }

        public requestMessage() : ng.IPromise<{}> {
            this.defer = this.$q.defer();
            this.fakeResponseTimer = setTimeout(() => this.defer.resolve(new greeting()), 5000);
            return this.defer.promise;
        }
    }
}
