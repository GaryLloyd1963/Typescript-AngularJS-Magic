namespace tsang.magic.controllers {

    import IGetMessageService = tsang.magic.services.IGetMessageService;
    import greeting = tsang.magic.classes.greeting;

    export class magicController {
        static $inject = ["IGetMessageService"];

        public messageToTheWorld: string = "Wait for it.....";

        constructor(private messageService: IGetMessageService) {
            this.requestMessage();
        }

        public requestMessage() {
            this.messageService.requestMessage()
                .then((message:greeting) => {
                    this.messageToTheWorld = message.message;
                });
        }
    }
}
