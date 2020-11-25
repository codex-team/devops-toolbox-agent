import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

/**
 * Class for settings
 */
export default class Config {
  /**
   * Api url
   */
  public static apiUrl: string = process.env.API_URL!;
  /**
   * Cron schedule
   */
  public static schedule: string = process.env.SCHEDULE!;
  /**
   * Server token
   */
  public static token: string = process.env.TOKEN!;
}
