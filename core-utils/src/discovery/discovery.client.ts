"use server";

// import Eureka from 'eureka-js-client';
import { Eureka } from "eureka-js-client";
import { EurekServerConfig } from "../definitions/discovery.type";
import { Logger } from "../logger/Logger";

export const check = (name: string): string => {
  return `Hello ${name}, core-utils is working fine, cheers ... :)`;
};

const logger = Logger.getLogger("core-util:eureka.client");

// Or, if you're not using a transpiler:
// const Eureka = require('eureka-js-client').Eureka;
export type EurekaClientConfig = {
  port: number;
  appName: string;
};

const eurekaServerPort = parseInt(
  (process.env.APP_DISVOVERY_SERVER_PORT || 8761) + ""
);

logger.log(
  `*** APP_DISVOVERY_SERVER_PORT: ${process.env.APP_DISVOVERY_SERVER_PORT}`
);

let client: Eureka;

const EurekaClient = {
  initAndStart: (
    clientConfig: EurekaClientConfig,
    serverConfig?: EurekServerConfig | undefined
  ) => {
    try {
      logger.log("Initializing Eureka Client ...", clientConfig);
      const { port, appName } = clientConfig;
      const eurekaServerConfig = new EurekServerConfig({
        port: eurekaServerPort,
        ...serverConfig,
      } as EurekServerConfig);

      logger.log(
        "client is connected to Eureka Server with Port: ",
        eurekaServerConfig.port
      );

      client = new Eureka({
        // application instance information
        instance: {
          instanceId: `${appName}:${port}`,
          app: appName,
          homePageUrl: `http://localhost:${port}`,
          hostName: "localhost",
          ipAddr: "127.0.0.1",
          port: {
            $: port,
            "@enabled": true,
          },
          vipAddress: appName, /// this is checked by discovery server
          dataCenterInfo: {
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
            name: "MyOwn",
          },
        },
        eureka: {
          // eureka server host / port
          host: eurekaServerConfig.host,
          port: eurekaServerConfig.port,
          servicePath: eurekaServerConfig.servicePath,
        },
      });
      // create eureka client and register with eureka server
      logger.log("Initialization Eureka Client completed.\n");
      logger.log("Starting Eureka Client ...");
      client.start((err, ...rest) => {
        if (err) {
          logger.log(
            "\nEureka Client failed to register !!!\n --- \n",
            err.message,
            "\n --- \n",
            err.name,
            "\n --- \n",
            rest
          );
          return;
        }

        logger.log("Eureka Client registered successfully.");
      });
    } catch (error) {
      logger.log("Error occurred !!!", error);
    }
  },

  start: () => {
    if (!client) {
      throw new Error("Eureka Client not initialized !!!");
    }

    client.start();
  },
  stop: () => {
    client.stop();
  },
  getInstancesByAppId: (appId: string) => {
    const instances = client.getInstancesByAppId(appId);

    if (instances.length === 1) {
      return instances[0];
    }

    throw new Error(`No instance found for ${appId}`);
  },
  getInstancesByVipAddress: (vipAddress: string) => {
    const instances = client.getInstancesByVipAddress(vipAddress);

    return instances;
  },
};

export { EurekaClient };
