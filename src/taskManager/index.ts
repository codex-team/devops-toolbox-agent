import cron from 'node-cron';

/**
 * Class TaskManager. TaskManager does the task on a schedule.
 * You can set schedule and task.
 */
export default class TaskManager {
  /**
   * The scheduled task which TaskManager does on a schedule
   */
  private scheduledTask: cron.ScheduledTask;

  /**
   * Constructor which create scheduled task
   *
   * @param schedule - Task schedule. TaskManager will do the task on a that schedule
   * @param task - The task which TaskManager will do
   */
  constructor(schedule: string, task: () => Promise<void>) {
    this.scheduledTask = cron.schedule(schedule, task);

    this.scheduledTask.start();
  }
}
