import { UserLogin } from "../interfaces/UserLogin.ts";
import { LoginResponse } from "../interfaces/LoginResponse";

const login = async (userInfo: UserLogin): Promise<LoginResponse> => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data?.message || 'Invalid login credentials.',
      };
    }

    return {
      success: true,
      data, // ✅ now inferred as `AuthPayload`
    };
  } catch (err) {
    console.error('Login request failed:', err);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
};

export { login };
