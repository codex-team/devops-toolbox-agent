import fs from 'fs';
import ConfigParser from '@webantic/nginx-config-parser';
import path from 'path';
import { NginxServerPayload, NginxServerConfig } from './types';
/**
 * Nginx Parser
 */
export default class NginxParser {
  /**
   * The method that parses all nginx configs
   *
   * @param configsPath - absolute path to nginx/sites-enabled
   */
  public static parse(configsPath: string): NginxServerPayload[] {
    const files = fs.readdirSync(configsPath);

    const parser = new ConfigParser();
    const configs = files.map(file => parser.readConfigFile(path.join(configsPath, file), {
      parseIncludes: false,
    }));

    /**
     * Array of server configs
     */
    let servers: NginxServerConfig[] = [];

    /**
     * One config can contain many configs
     */
    for (const config of configs) {
      const server = config.server;

      if (!server) {
        continue;
      }

      /**
       * If we get config is like on line 26 then we merge all configs in this config with main array of configs
       */
      if (Array.isArray(server)) {
        servers = servers.concat(server);
        continue;
      }

      /**
       * If we get default config then we push it in main array of configs
       */
      servers.push(server);
    }

    const nginxPayloads: NginxServerPayload[] = [];

    for (const server of servers) {
      // eslint-disable-next-line camelcase
      const { listen, server_name: serverName, 'location /': location } = server;
      const payload: NginxServerPayload = {
        listen,
        serverName,
        proxyPass: location?.proxy_pass,
      };

      nginxPayloads.push(payload);
    }

    return nginxPayloads;
  }
}
