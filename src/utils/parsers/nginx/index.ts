import fs from 'fs';
import { NginxPayload } from './types';
import ConfigParser from '@webantic/nginx-config-parser';

/**
 * Nginx Parser
 */
export default class NginxParser {
  /**
   * The method that parses all nginx configs
   *
   * @param path - absolute path to nginx/sites-enabled
   */
  public static parse(path: string): NginxPayload[] {
    const files = fs.readdirSync(path).filter(file => file.match(/\.conf/));

    const parser = new ConfigParser();
    const configs = files.map(file => parser.readConfigFile(path + '/' + file, {
      parseIncludes: false,
    }));

    const nginxPayloads: NginxPayload[] = [];

    for (const config of configs) {
      const httpServer = config.http?.server;

      if (!httpServer) {
        continue;
      }

      // eslint-disable-next-line camelcase
      const { listen, server_name: serverName, 'location /': location } = httpServer;

      const payload: NginxPayload = {
        listen,
        serverName,
        proxyPass: location.proxy_pass,
      };

      nginxPayloads.push(payload);
    }

    return nginxPayloads;
  }
}
