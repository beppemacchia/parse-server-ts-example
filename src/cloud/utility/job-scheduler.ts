import { CronJob } from 'cron';
import { logger } from '../../shared/logger';

export class JobScheduler {
  private jobs: CronJob<any, any>[];
  private timezone: string;

  constructor(timezone?: string) {
    this.jobs = [];
    this.timezone = timezone ?? 'GMT';
  }

  /**
   * Start Jobs Scheduling
   */
  public start(): void {
    for (const job of this.jobs) {
      job.start();
    }
    logger.info('cron on');
  }

  /**
   * Stop Jobs Scheduling
   */
  public stop(): void {
    for (const job of this.jobs) {
      job.stop();
    }
    logger.info('cron off');
  }

  /**
   * Schedule a new Job
   * @param name CloudCode Job Name
   * @param timeFormat The time to fire off your job
   * @param data
   */
  public scheduleJob(name: string, timeFormat: string, data?: any): void {
    const job = new CronJob(
      timeFormat,
      () => {
        Parse.Cloud.startJob(name, data)
          .then(result => logger.info(`${name} job successfully started: ${result}`))
          .catch(error => logger.error(`${name} has an error: ${error}`));
      },
      null,
      false,
      this.timezone
    );
    this.jobs.push(job);
  }
}
