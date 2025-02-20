export class InstallationModel extends Parse.Installation {
  public static className = '_Installation';

  public static fields = {
    objectId: 'objectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ACL: 'ACL',
    installationId: 'installationId',
    deviceToken: 'deviceToken',
    channels: 'channels',
    deviceType: 'deviceType',
    pushType: 'pushType',
    GCMSenderId: 'GCMSenderId',
    timeZone: 'timeZone',
    localeIdentifier: 'localeIdentifier',
    badge: 'badge',
    appVersion: 'appVersion',
    appName: 'appName',
    appIdentifier: 'appIdentifier',
    parseVersion: 'parseVersion',
  };

  constructor() {
    super();
  }

  public static registerParseSubclass(): void {
    Parse.Object.registerSubclass(InstallationModel.className, InstallationModel);
  }

  public get objectId(): string {
    return this.get(InstallationModel.fields.objectId);
  }

  public get createdAt(): Date {
    return this.get(InstallationModel.fields.createdAt);
  }

  public get updatedAt(): Date {
    return this.get(InstallationModel.fields.updatedAt);
  }

  public get ACL(): Parse.ACL {
    return this.get(InstallationModel.fields.ACL);
  }

  public set ACL(ACL: Parse.ACL) {
    this.set(InstallationModel.fields.ACL, ACL);
  }

  public get installationId(): string {
    return this.get(InstallationModel.fields.installationId);
  }

  public set installationId(installationId: string) {
    this.set(InstallationModel.fields.installationId, installationId);
  }

  public get deviceToken(): string {
    return this.get(InstallationModel.fields.deviceToken);
  }

  public set deviceToken(deviceToken: string) {
    this.set(InstallationModel.fields.deviceToken, deviceToken);
  }

  public get channels(): any[] {
    return this.get(InstallationModel.fields.channels);
  }

  public set channels(channels: any[]) {
    this.set(InstallationModel.fields.channels, channels);
  }

  public get deviceType(): string {
    return this.get(InstallationModel.fields.deviceType);
  }

  public set deviceType(deviceType: string) {
    this.set(InstallationModel.fields.deviceType, deviceType);
  }

  public get pushType(): string {
    return this.get(InstallationModel.fields.pushType);
  }

  public set pushType(pushType: string) {
    this.set(InstallationModel.fields.pushType, pushType);
  }

  public get GCMSenderId(): string {
    return this.get(InstallationModel.fields.GCMSenderId);
  }

  public set GCMSenderId(GCMSenderId: string) {
    this.set(InstallationModel.fields.GCMSenderId, GCMSenderId);
  }

  public get timeZone(): string {
    return this.get(InstallationModel.fields.timeZone);
  }

  public set timeZone(timeZone: string) {
    this.set(InstallationModel.fields.timeZone, timeZone);
  }

  public get localeIdentifier(): string {
    return this.get(InstallationModel.fields.localeIdentifier);
  }

  public set localeIdentifier(localeIdentifier: string) {
    this.set(InstallationModel.fields.localeIdentifier, localeIdentifier);
  }

  public get badge(): number {
    return this.get(InstallationModel.fields.badge);
  }

  public set badge(badge: number) {
    this.set(InstallationModel.fields.badge, badge);
  }

  public get appVersion(): string {
    return this.get(InstallationModel.fields.appVersion);
  }

  public set appVersion(appVersion: string) {
    this.set(InstallationModel.fields.appVersion, appVersion);
  }

  public get appName(): string {
    return this.get(InstallationModel.fields.appName);
  }

  public set appName(appName: string) {
    this.set(InstallationModel.fields.appName, appName);
  }

  public get appIdentifier(): string {
    return this.get(InstallationModel.fields.appIdentifier);
  }

  public set appIdentifier(appIdentifier: string) {
    this.set(InstallationModel.fields.appIdentifier, appIdentifier);
  }

  public get parseVersion(): string {
    return this.get(InstallationModel.fields.parseVersion);
  }

  public set parseVersion(parseVersion: string) {
    this.set(InstallationModel.fields.parseVersion, parseVersion);
  }
}
