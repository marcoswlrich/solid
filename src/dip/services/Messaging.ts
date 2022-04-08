import { IMessagingProtocol } from "../classes/interfaces/IMessaging-protocol";

class Messaging  implements IMessagingProtocol{
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}

export { Messaging };
