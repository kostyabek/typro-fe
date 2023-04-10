interface Reason {
  message: string;
  metadata: Record<string, string>;
}

export interface UniversalResponse<T> {
  value: T;
  reasons: Reason[];
}
