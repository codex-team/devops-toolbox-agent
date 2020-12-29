import fetch, { Response } from 'node-fetch';
import TaskManager from './taskManager';
import Config from './config';
import { Service } from './types';
import { MessagePayload, RequestMessage } from './utils/protocol/types';
import NginxParser from './utils/parsers/nginx';
import { NginxPayload } from './utils/parsers/nginx/types';
import path from 'path';

/**
 * Task Manager will send current services to the API by a schedule
 */
const taskManager: TaskManager = new TaskManager(Config.schedule, async () => {
  console.log('🛰 Parsing configs...');
  /**
   * Parse nginx config file
   */
  const nginxPayloads: NginxPayload[] = NginxParser.parse(path.join(Config.nginxDir, 'sites-enabled'));

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

  console.log('🚀 Sending message to API...');
  const res: Response = await fetch(Config.apiUrl, {
    method: 'put',
    body: JSON.stringify(requestMessage),
    headers: {
      'Content-Type': 'application/json',
      Authorization: Config.token,
    },
  });

  if (res.status === 200) {
    console.log('✅ Services successful send!');
  } else {
    console.log('❌ Something went wrong while sending message...');
  }
});
