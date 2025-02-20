export class UserModel extends Parse.User {
  public static className = '_User';

  public static fields = {
    objectId: 'objectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ACL: 'ACL',
    username: 'username',
    password: 'password',
    email: 'email',
    emailVerified: 'emailVerified',
    authData: 'authData',
  };

  constructor() {
    super();
  }

  public static registerParseSubclass(): void {
    Parse.Object.registerSubclass(UserModel.className, UserModel);
  }

  public get objectId(): string {
    return this.get(UserModel.fields.objectId);
  }

  public get createdAt(): Date {
    return this.get(UserModel.fields.createdAt);
  }

  public get updatedAt(): Date {
    return this.get(UserModel.fields.updatedAt);
  }

  public get ACL(): Parse.ACL {
    return this.get(UserModel.fields.ACL);
  }

  public set ACL(ACL: Parse.ACL) {
    this.set(UserModel.fields.ACL, ACL);
  }

  public get username(): string {
    return this.get(UserModel.fields.username);
  }

  public set username(username: string) {
    this.set(UserModel.fields.username, username);
  }

  public get password(): string {
    return this.get(UserModel.fields.password);
  }

  public set password(password: string) {
    this.set(UserModel.fields.password, password);
  }

  public get email(): string {
    return this.get(UserModel.fields.email);
  }

  public set email(email: string) {
    this.set(UserModel.fields.email, email);
  }

  public get emailVerified(): boolean {
    return this.get(UserModel.fields.emailVerified);
  }

  public set emailVerified(emailVerified: boolean) {
    this.set(UserModel.fields.emailVerified, emailVerified);
  }

  public get authData(): any {
    return this.get(UserModel.fields.authData);
  }

  public set authData(authData: any) {
    this.set(UserModel.fields.authData, authData);
  }
}
