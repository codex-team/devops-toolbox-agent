import yargs from 'yargs';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '..', '..', '.env'),
});

const argv = yargs(process.argv.slice(2)).options({
  API_URL: {
    type: 'string',
    demandOption: false,
    description: 'API url to which we send current services on the server',
    default: process.env.API_URL || '',
  },
  SCHEDULE: {
    type: 'string',
    demandOption: true,
    description: 'Cron schedule',
  },
  TOKEN: {
    type: 'string',
    demandOption: true,
    description: 'Server token',
  },
  NGINX_DIR: {
    type: 'string',
    demandOption: false,
    description: 'Nginx directory',
    default: '/etc/nginx',
  },
}).argv;

/**
 * Class for settings
 */
export default class Config {
  /**
   * Api url
   */
  public static apiUrl: string = argv.API_URL;
  /**
   * Cron schedule
   */
  public static schedule: string = argv.SCHEDULE;
  /**
   * Server token
   */
  public static token: string = argv.TOKEN;
  /**
   * Nginx directory
   */
  public static nginxDir: string = argv.NGINX_DIR;
}
