import { TicketData } from '../interfaces/TicketData.ts';
import { ApiMessage } from '../interfaces/ApiMessage.ts';
import Auth from '../utils/auth';
import {ApiResponse} from "../interfaces/ApiResponse.ts";


const retrieveTickets = async (): Promise<TicketData[]> => {
  try {
    const response = await fetch('/api/tickets/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn('Ticket fetch failed:', data);
      return [];
    }

    return data;
  } catch (err) {
    console.error('Error retrieving tickets:', err);
    return [];
  }
};

const retrieveTicket = async (id: number | null): Promise<ApiResponse<TicketData>> => {
  try {
    const response = await fetch(`/api/tickets/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn('Single ticket fetch failed:', data);
      return { success: false, message: 'Could not retrieve ticket.' };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error retrieving ticket:', err);
    return { success: false, message: 'An unexpected error occurred.' };
  }
};

const createTicket = async (body: TicketData): Promise<ApiResponse> => {
  try {
    const response = await fetch('/api/tickets/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn('Ticket creation failed:', data);
      return { success: false, message: 'Failed to create ticket.' };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error during ticket creation:', err);
    return { success: false, message: 'Could not create ticket.' };
  }
};

const updateTicket = async (
  ticketId: number,
  body: TicketData
): Promise<ApiResponse<TicketData>> => {
  try {
    const response = await fetch(`/api/tickets/${ticketId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn('Ticket update failed:', data);
      return { success: false, message: 'Failed to update ticket.' };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error updating ticket:', err);
    return { success: false, message: 'Could not update ticket.' };
  }
};

const deleteTicket = async (ticketId: number): Promise<ApiResponse<ApiMessage>> => {
  try {
    const response = await fetch(`/api/tickets/${ticketId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn('Ticket deletion failed:', data);
      return { success: false, message: 'Failed to delete ticket.' };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error deleting ticket:', err);
    return { success: false, message: 'Could not delete ticket.' };
  }
};

export {
  createTicket,
  deleteTicket,
  retrieveTickets,
  retrieveTicket,
  updateTicket
};
