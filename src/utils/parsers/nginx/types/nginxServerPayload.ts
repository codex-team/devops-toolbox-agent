/**
 * Location field in nginx config
 */
export interface Location {
  /**
   * In nginx config field is 'proxy_pass'
   */
  // eslint-disable-next-line camelcase
  proxy_pass?: string[];
}

/**
 * Base nginx server config
 */
export interface BaseNginxServerConfig {
  /**
   * The ports which server listens
   */
  listen: string[];
}

/**
 * Nginx server payload. We need only this fields
 */
export interface NginxServerConfig extends BaseNginxServerConfig {
  /**
   * In nginx config this field is 'server_name'
   */
  // eslint-disable-next-line camelcase
  server_name: string;

  /**
   * In nginx config this field is 'location /'
   */
  'location /'?: Location;
}

/**
 * Nginx server payload which we send to API
 */
export interface NginxServerPayload extends BaseNginxServerConfig {
  /**
   * In nginx config this field is 'server_name'
   */
  serverName: string;

  /**
   * In nginx config field is 'proxy_pass'
   */
  proxyPass?: string[];
}
