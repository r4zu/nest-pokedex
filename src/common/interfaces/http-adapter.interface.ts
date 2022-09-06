export default interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}
