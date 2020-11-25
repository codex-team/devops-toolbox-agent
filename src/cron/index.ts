import cron from 'node-cron';

/**
 * Class Cron
 */
export default class Cron {
  /**
   * @private scheduledTask - cron task
   */
  private scheduledTask: cron.ScheduledTask;

  /**
   * Constructor
   *
   * @param schedule - schedule
   * @param task - cron task
   */
  constructor(schedule: string, task: () => Promise<void>) {
    this.scheduledTask = cron.schedule(schedule, task);

    this.scheduledTask.start();
  }
}
