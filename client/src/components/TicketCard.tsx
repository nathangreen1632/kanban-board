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
        // You can optionally show an alert or message in the UI
      }
    }
  };

  return (
    <div className="ticket-card">
      <h3>{ticket.name}</h3>
      <p>{ticket.description}</p>
      <p>{ticket.assignedUser?.username}</p>
      <Link
        to="/edit"
        state={{ id: ticket.id }}
        type="button"
        className="editBtn"
      >
        Edit
      </Link>
      <button
        type="button"
        value={String(ticket.id)}
        onClick={handleDelete}
        className="deleteBtn"
      >
        Delete
      </button>
    </div>
  );
};

export default TicketCard;
