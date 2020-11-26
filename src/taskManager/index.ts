import cron from 'node-cron';

/**
 * Class TaskManager. TaskManager does the task on a schedule.
 * You can set schedule and task.
 */
export default class TaskManager {
  /**
   * @private scheduledTask - scheduled task
   */
  private scheduledTask: cron.ScheduledTask;

  /**
   * Constructor
   *
   * @param schedule - schedule
   * @param task - task
   */
  constructor(schedule: string, task: () => Promise<void>) {
    this.scheduledTask = cron.schedule(schedule, task);

    this.scheduledTask.start();
  }
}
