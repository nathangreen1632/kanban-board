export interface AuthPayload {
  token: string;
  username: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  data?: AuthPayload;
}
