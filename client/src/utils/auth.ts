import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile(): JwtPayload | null {
    const token : string | null = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<JwtPayload>(token);
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  loggedIn(): boolean {
    const token : string | null = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded : JwtPayload = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return false;
      const currentTime : number = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;
    } catch (error) {
      console.error("Error checking token expiration:", error);
      return true;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  login(idToken: string): void {
    localStorage.setItem('auth_token', idToken);
    window.location.href = '/home';
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    window.location.href = '/login';
  }
}

export default new AuthService();
