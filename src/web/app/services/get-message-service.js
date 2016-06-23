var tsang;
(function (tsang) {
    var magic;
    (function (magic) {
        var services;
        (function (services) {
            var greeting = tsang.magic.classes.greeting;
            var GetMessageService = (function () {
                function GetMessageService($q) {
                    this.$q = $q;
                }
                GetMessageService.prototype.requestMessage = function () {
                    var _this = this;
                    this.defer = this.$q.defer();
                    this.fakeResponseTimer = setTimeout(function () { return _this.defer.resolve(new greeting()); }, 5000);
                    return this.defer.promise;
                };
                return GetMessageService;
            })();
            services.GetMessageService = GetMessageService;
        })(services = magic.services || (magic.services = {}));
    })(magic = tsang.magic || (tsang.magic = {}));
})(tsang || (tsang = {}));
//# sourceMappingURL=get-message-service.js.map