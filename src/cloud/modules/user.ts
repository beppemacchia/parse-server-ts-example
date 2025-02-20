import { logger } from 'src/shared/logger';
import type { AfterSaveDefinition, BeforeSaveDefinition } from '../models/interfaces/parse-definition.interface';
import { UserModel } from '../models/user.model';

const beforeSave: BeforeSaveDefinition<UserModel> = {
  func: request => {
    const user = request.object;
    logger.info('Before Save User');

    // If the user has been newly created
    if (user.isNew()) {
      // Set ACL
      const userACL = new Parse.ACL();
      userACL.setPublicReadAccess(true);
      userACL.setPublicWriteAccess(false);
      user.setACL(userACL);
    }
  },
};

const afterSave: AfterSaveDefinition<UserModel> = {
  func: () => {
    logger.info('After Save User');
  },
};

const registerUserModule = (): void => {
  Parse.Cloud.beforeSave<UserModel>(UserModel, beforeSave.func);
  Parse.Cloud.afterSave<UserModel>(UserModel, afterSave.func);
};

export { registerUserModule };
