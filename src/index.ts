import fetch, { Response } from 'node-fetch';
import TaskManager from './taskManager';
import Config from './config';
import { Service } from './types';
import { MessagePayload, RequestMessage } from './utils/protocol/types';

/**
 * Task Manager will send current services to the API by a schedule
 */

const taskManager: TaskManager = new TaskManager(Config.schedule, async () => {
  const services: Service[] = [
    {
      type: 'nginx',
      payload: [
        {
          serverName: 'api.notes.codex.so',
          listen: [
            '443',
          ],
          proxyPass: [
            'http://127.0.0.1:5500/',
          ],
        },
      ],
    },
    {
      type: 'docker',
      payload: [
        {
          names: 'codexnotesserver_nginx_1',
          containerId: 'cfcc3015502b',
          image: 'codexnotesserver_nginx',
          created: '2019-10-30 08:30:15',
          status: 'Up 3 weeks',
          ports: [
            {
              inner: {
                host: '',
                port: 80,
                type: 'tcp',
              },
              outer: {
                host: '127.0.0.1',
                port: 5500,
                type: '',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'ports',
      payload: [
        {
          proto: 'tcp',
          localAddress: {
            host: '0.0.0.0',
            port: 80,
          },
          state: 'LISTEN',
        },
      ],
    },
    {
      type: 'interfaces',
      payload: [
        {
          name: 'ens3',
          ipAddress: '92.53.77.245',
          netmask: '24',
        },
      ],
    },
    {
      type: 'disk',
      payload: {
        All: 29.47,
        Used: 23.97,
        Free: 5.5,
        Percent: 81,
      },
    },
  ];

  const payload: MessagePayload = {
    services,
  };

  const requestMessage: RequestMessage = {
    messageId: '1',
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
