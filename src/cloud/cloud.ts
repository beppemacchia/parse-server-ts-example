import { InstallationModel } from './models/installation.model';
import { UserModel } from './models/user.model';
import { registerCommonModule } from './modules/common';
import { registerJobModule } from './modules/job';
import { registerUserModule } from './modules/user';

export const cloud = (): void => {
  /**
   * Register Subclasses
   */
  UserModel.registerParseSubclass();
  InstallationModel.registerParseSubclass();

  /**
   * Register Modules
   */
  registerJobModule();
  registerCommonModule();
  registerUserModule();
};
