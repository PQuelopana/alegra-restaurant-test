import { Server } from 'http';
import { EmitterBus } from '../../../../../src/Contexts/Shared/domain/EmitterBus';

export class EmitterBusMockup implements EmitterBus {
  start(httpServer: Server): void {
    throw new Error('Method not implemented.');
  }

  emit(event: string, data: any): void {
  }
}
