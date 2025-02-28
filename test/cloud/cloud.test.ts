import { cloud } from '../../src/cloud/cloud';
import { destroyJobScheduler } from '../../src/cloud/modules/job';
import { cloudFunctionsTests } from './cloud-functions';

describe('Cloud Code TESTS', () => {
  Parse.User.enableUnsafeCurrentUser();

  beforeAll(() => {
    console.log('Load Cloud Code');
    cloud();
  });

  afterAll(() => {
    console.log('Destroy Jobs Cloud Code');
    destroyJobScheduler();
  });

  cloudFunctionsTests();
});
