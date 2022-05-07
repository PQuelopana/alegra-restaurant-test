import * as http from 'http';

export interface EmitterBus {
  start(httpServer: http.Server): void
  emit(event: string, data: any): void
}
