export type EurekServerConfigType = {
  host: string;
  port: number;
  servicePath: string;
};
export class EurekServerConfig {
  // eureka server host / port
  host: string = 'localhost';
  port: number = 8761;
  servicePath: string = '/eureka/apps';

  constructor(config: EurekServerConfigType = {} as EurekServerConfigType) {
    this.host = config.host || this.host;
    this.port = config.port || this.port;
    this.servicePath = config.servicePath || this.servicePath;
  }
}
