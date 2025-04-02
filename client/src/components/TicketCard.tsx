import { Link } from 'react-router-dom';
import { TicketData } from '../interfaces/TicketData.ts';
import { ApiResponse } from '../interfaces/ApiResponse';
import { ApiMessage } from '../interfaces/ApiMessage.ts';
import { MouseEvent } from 'react';

interface TicketCardProps {
  ticket: TicketData;
  deleteTicket: (ticketId: number) => Promise<ApiResponse<ApiMessage>>;
}

const TicketCard = ({ ticket, deleteTicket }: TicketCardProps) => {
  const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    const ticketId = Number(event.currentTarget.value);
    if (!isNaN(ticketId)) {
      const response = await deleteTicket(ticketId);
      if (!response.success) {
        console.error('Failed to delete ticket:', response.message);
      }
    }
  };

  return (
    <div className="text-center bg-gray-400 border border-black p-4 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-1">{ticket.name}</h3>
      <p className="text-sm mb-1">{ticket.description}</p>
      <p className="text-sm font-medium text-black mb-3">{ticket.assignedUser?.username}</p>
      <div className="flex justify-center gap-3">
        <Link
          to="/edit"
          state={{ id: ticket.id }}
          className="bg-black text-white px-4 py-1 rounded-md text-sm hover:bg-neutral-300 hover:text-black transition"
        >
          Edit
        </Link>
        <button
          type="button"
          value={String(ticket.id)}
          onClick={handleDelete}
          className="bg-black text-white px-4 py-1 rounded-md text-sm hover:bg-neutral-300 hover:text-black transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
