import { JwtPayload } from 'jwt-decode';

export interface ExtendedJwtPayload extends JwtPayload {
  username: string;
  role?: string;
}
