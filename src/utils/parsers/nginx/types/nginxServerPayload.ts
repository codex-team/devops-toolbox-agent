/**
 * Nginx server payload. We need only this fields
 */
export interface NginxServerPayload {
  /**
   * The ports which server listens
   */
  listen: string[];

  /**
   * In nginx config this field is 'server_name'
   */
  serverName: string;

  /**
   * In nginx config this field is 'proxy_pass'
   */
  proxyPass?: string[];
}
