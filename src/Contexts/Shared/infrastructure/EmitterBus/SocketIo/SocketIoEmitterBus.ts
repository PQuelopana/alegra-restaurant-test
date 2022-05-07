import { Server } from 'http';
import { EmitterBus } from '../../../domain/EmitterBus';
import io from 'socket.io';

export class SocketIoEmitterBus implements EmitterBus {
  private ioServer?: io.Server

  start(httpServer: Server): void {
    this.ioServer = new io.Server(httpServer, {
      cors: {
        origin: '*'
      }
    })
  }

  emit(event: string, data: any): void {
    this.ioServer?.emit(event, data)
  }
}
