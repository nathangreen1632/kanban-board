import Auth from '../utils/auth';
import { UserData } from '../interfaces/UserData.ts';
import { ApiResponse } from '../interfaces/ApiResponse';

const retrieveUsers = async (): Promise<ApiResponse<UserData[]>> => {
  try {
    const response = await fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn('User fetch failed:', data);
      return { success: false, message: 'Failed to retrieve users.' };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error retrieving users:', err);
    return { success: false, message: 'An unexpected error occurred while fetching users.' };
  }
};

export { retrieveUsers };
