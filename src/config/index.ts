import yargs from 'yargs';

const argv = yargs(process.argv.slice(2)).options({
  API_URL: {
    type: 'string',
    demandOption: true,
    description: 'Api url',
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
    demandOption: true,
    description: 'Nginx directory',
  },
}).argv;

/**
 * Class for settings
 */
export default class Config {
  /**
   * API url to which we send current services on the server
   */
  public static apiUrl: string = argv.API_URL!;
  /**
   * Cron schedule
   */
  public static schedule: string = argv.SCHEDULE!;
  /**
   * Server token
   */
  public static token: string = argv.TOKEN!;
  /**
   * Nginx directory
   */
  public static nginxDir: string = argv.NGINX_DIR!;
}
