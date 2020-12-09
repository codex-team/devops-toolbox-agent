import fetch, { Response } from 'node-fetch';
import TaskManager from './taskManager';
import Config from './config';
import { Service } from './types';
import { MessagePayload, RequestMessage } from './utils/protocol/types';
import NginxParser from './utils/parsers/nginx';
import { NginxPayload } from './utils/parsers/nginx/types';

/**
 * Task Manager will send current services to the API by a schedule
 */
const taskManager: TaskManager = new TaskManager(Config.schedule, async () => {
  /**
   * Parse nginx config file
   */
  const nginxPayloads: NginxPayload[] = NginxParser.parse(Config.nginxDir + '/sites-enabled');

  const services: Service[] = [];

  services.push({
    type: 'nginx',
    payload: nginxPayloads,
  });

  const payload: MessagePayload = {
    services,
  };

  const requestMessage: RequestMessage = {
    type: 'services-update',
    payload,
  };

  const res: Response = await fetch(Config.apiUrl, {
    method: 'put',
    body: JSON.stringify(requestMessage),
    headers: {
      'Content-Type': 'application/json',
      Authorization: Config.token,
    },
  });
});
