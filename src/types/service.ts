import { NginxServerPayload } from '../utils/parsers/nginx/types';

/**
 * Interface for service which we send to API
 */

export default interface Service {
  /**
   * Service type. It could be 'nginx', 'docker', 'ports', 'interfaces' or 'disk'
   */
  type: string;
  /**
   * @todo Add docker, ports, interfaces, disk types
   *
   * Service payload. You can read about it in docs/services.md
   */
  payload: NginxServerPayload[];
}
