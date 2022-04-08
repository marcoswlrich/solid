import { IPersistencyProtocol } from "../classes/interfaces/IPersistency-protocol";

class Persistency implements IPersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}

export { Persistency };
