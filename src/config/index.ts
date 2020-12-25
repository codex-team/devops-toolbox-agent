import yargs from 'yargs';

const argv = yargs(process.argv.slice(2)).options({
  API_URL: {
    type: 'string',
    demandOption: true,
    description: 'API url to which we send current services on the server',
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
  public static apiUrl: string = argv.API_URL!;
  public static schedule: string = argv.SCHEDULE!;
  public static token: string = argv.TOKEN!;
  public static nginxDir: string = argv.NGINX_DIR!;
}
