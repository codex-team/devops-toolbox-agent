/**
 * Nginx config value
 */
interface Value {
  value: string | string[],
}

/**
 * Nginx config properties
 */
type Props = 'listen' | 'serverName' | 'proxyPass';

export type NginxPayload = Record<Props, Value>;
