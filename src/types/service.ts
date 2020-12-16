/**
 * Interface for service which we send to API
 */
export default interface Service {
  /**
   * Service type. It could be 'nginx', 'docker', 'ports', 'interfaces' or 'disk'
   */
  type: string;
  /**
   * Service payload. You can read about it in docs/services.md
   */
  payload: Record<string, unknown> | Record<string, unknown>[];
}
