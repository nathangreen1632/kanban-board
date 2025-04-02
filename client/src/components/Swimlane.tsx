import TicketCard from './TicketCard';
import { TicketData } from '../interfaces/TicketData.ts';
import { ApiMessage } from '../interfaces/ApiMessage.ts';
import { ApiResponse } from '../interfaces/ApiResponse';

interface SwimlaneProps {
  title: string;
  tickets: TicketData[];
  deleteTicket: (ticketId: number) => Promise<ApiResponse<ApiMessage>>;
}

const Swimlane = ({ title, tickets, deleteTicket }: SwimlaneProps) => {
  const getStatusClasses = (status: string) => {
    const base = "flex flex-col p-4 rounded-lg min-w-[280px] max-w-sm w-full h-full";

    switch (status) {
      case 'Todo':
        return `${base} bg-neutral-400 text-gray-50`;       // was #FDC5F5
      case 'In Progress':
        return `${base} bg-neutral-500 text-gray-50`;       // was #F7AEF8
      case 'Done':
        return `${base} bg-neutral-600 text-gray-50`;       // was #EA7AF4
      default:
        return `${base} bg-gray-100`;
    }
  };

  return (
    <div className={getStatusClasses(title)}>
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <div className="flex flex-col gap-4">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            deleteTicket={deleteTicket}
          />
        ))}
      </div>
    </div>
  );
};

export default Swimlane;
