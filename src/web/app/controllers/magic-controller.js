var tsang;
(function (tsang) {
    var magic;
    (function (magic) {
        var controllers;
        (function (controllers) {
            var magicController = (function () {
                function magicController(messageService) {
                    this.messageService = messageService;
                    this.messageToTheWorld = "Wait for it.....";
                    this.requestMessage();
                }
                magicController.prototype.requestMessage = function () {
                    var _this = this;
                    this.messageService.requestMessage()
                        .then(function (message) {
                        _this.messageToTheWorld = message.message;
                    });
                };
                magicController.$inject = ["IGetMessageService"];
                return magicController;
            })();
            controllers.magicController = magicController;
        })(controllers = magic.controllers || (magic.controllers = {}));
    })(magic = tsang.magic || (tsang.magic = {}));
})(tsang || (tsang = {}));
//# sourceMappingURL=magic-controller.js.map