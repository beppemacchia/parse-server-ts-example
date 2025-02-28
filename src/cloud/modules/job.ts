import { logger } from '../../shared/logger';
import type { JobDefinition } from '../models/interfaces/parse-definition.interface';
import { JobScheduler } from '../utility/job-scheduler';

let jobScheduler: JobScheduler;
// CLOUD CODE JOBS SCHEDULER
const initializeJobScheduler = (): void => {
  jobScheduler = new JobScheduler('GMT');
  // Define jobs
  jobScheduler.scheduleJob(helloJob.name, '0 0 * * *'); // at 00:00 GMT

  // Start scheduler
  jobScheduler.start();
};

const destroyJobScheduler = (): void => {
  if (jobScheduler) {
    jobScheduler.stop();
  }
};

/**
 * Hello World Job
 */
const helloJob: JobDefinition = {
  name: 'helloJob',
  func: req => {
    const { message } = req;
    const mx = 'Hello! This is a JOB';
    logger.info(mx);
    message(mx);
  },
};

const registerJobModule = (): void => {
  Parse.Cloud.job(helloJob.name, helloJob.func);
  initializeJobScheduler();
};

export { helloJob, registerJobModule, destroyJobScheduler };
