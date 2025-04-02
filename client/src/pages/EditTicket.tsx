import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { retrieveTicket, updateTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData.ts';
import { ApiResponse } from '../interfaces/ApiResponse';

const EditTicket = () => {
  const [ticket, setTicket] = useState<TicketData | undefined>();

  const navigate = useNavigate();
  const { state } = useLocation();

  const fetchTicket = async (ticketId: TicketData): Promise<void> => {
    try {
      const result: ApiResponse<TicketData> = await retrieveTicket(ticketId.id);
      if (result.success && result.data) {
        setTicket(result.data);
      } else {
        console.warn('Ticket not found:', result.message);
      }
    } catch (err) {
      console.error('Failed to retrieve ticket:', err);
    }
  };

  useEffect(() => {
    fetchTicket(state);
  }, [state]);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (ticket && ticket.id !== null) {
      const result = await updateTicket(ticket.id, ticket);
      if (result.success) {
        navigate('/');
      } else {
        console.error('Update failed:', result.message);
      }
    } else {
      console.error('Ticket data is undefined.');
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  return (
    <div className="flex justify-center items-center min-h-[1000px] px-4">
      {ticket ? (
        <form
          onSubmit={handleSubmit}
          className="bg-neutral-500 shadow-md rounded-lg p-8 w-full max-w-xl space-y-5"
        >
          <h1 className="text-2xl font-bold text-center text-white">Edit Ticket</h1>

          <div>
            <label htmlFor="tName" className="block text-sm font-medium text-white mb-1">
              Ticket Name
            </label>
            <textarea
              id="tName"
              name="name"
              value={ticket.name ?? ''}
              onChange={handleTextAreaChange}
              className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-rose-500"
            />
          </div>

          <div>
            <label htmlFor="tStatus" className="block text-sm font-medium text-white mb-1">
              Ticket Status
            </label>
            <select
              name="status"
              id="tStatus"
              value={ticket.status ?? ''}
              onChange={handleChange}
              className="w-full bg-neutral-300 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-rose-500"
            >
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div>
            <label htmlFor="tDescription" className="block text-sm font-medium text-white mb-1">
              Ticket Description
            </label>
            <textarea
              id="tDescription"
              name="description"
              value={ticket.description ?? ''}
              onChange={handleTextAreaChange}
              className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-rose-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-300 text-black font-medium py-2 px-4 rounded-md hover:bg-black hover:text-white transition"
          >
            Submit Ticket
          </button>
        </form>
      ) : (
        <div className="text-center text-red-600 font-semibold">
          Issues fetching ticket
        </div>
      )}
    </div>

  );
};

export default EditTicket;
