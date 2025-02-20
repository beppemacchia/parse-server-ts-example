import path from 'path';

export const projectRoot = path.join(path.dirname('.'), '..', '..');
export const envConfig = process.env;
export const publicParseUrl = `${envConfig.PUBLIC_SERVER_URL}${envConfig.PARSE_MOUNT}`;
export const localParseUrl = `${envConfig.LOCAL_SERVER_URL}:${envConfig.PORT}${envConfig.PARSE_MOUNT}`;
export const localDashboardUrl = `${envConfig.LOCAL_SERVER_URL}:${envConfig.PORT}${envConfig.DASHBOARD_MOUNT}`;
export const isDev = envConfig.NODE_ENV === 'development';
