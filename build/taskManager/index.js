"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
/**
 * Class TaskManager. TaskManager does the task on a schedule.
 * You can set schedule and task.
 */
class TaskManager {
    /**
     * Constructor which create scheduled task
     *
     * @param schedule - Task schedule. TaskManager will do the task on a that schedule
     * @param task - The task which TaskManager will do
     */
    constructor(schedule, task) {
        this.scheduledTask = node_cron_1.default.schedule(schedule, task);
        this.scheduledTask.start();
    }
}
exports.default = TaskManager;
