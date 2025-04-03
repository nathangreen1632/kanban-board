import { useEffect, useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import { retrieveTickets, deleteTicket } from '../api/ticketAPI';
import ErrorPage from './ErrorPage';
import Swimlane from '../components/Swimlane';
import { TicketData } from '../interfaces/TicketData.ts';
import { ApiMessage } from '../interfaces/ApiMessage.ts';
import { ApiResponse } from '../interfaces/ApiResponse';

import auth from '../utils/auth';

const boardStates: string[] = ['Todo', 'In Progress', 'Done'];

const Board = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [error, setError] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  const fetchTickets = async (): Promise<void> => {
    try {
      const data = await retrieveTickets();
      setTickets(data);
    } catch (err) {
      console.error('Failed to retrieve tickets:', err);
      setError(true);
    }
  };

  const deleteIndvTicket = async (
    ticketId: number
  ): Promise<ApiResponse<ApiMessage>> => {
    try {
      const result = await deleteTicket(ticketId);
      await fetchTickets();
      return result;
    } catch (err) {
      console.error('Failed to delete ticket:', err);
      return {
        success: false,
        message: 'Ticket deletion failed.',
      };
    }
  };

  useLayoutEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (loginCheck) {
      (async () => {
        await fetchTickets();
      })();
    }
  }, [loginCheck]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {!loginCheck ? (
        <div className="flex items-center justify-center w-full min-h-[1000px]">
          <h1 className="text-5xl font-semibold text-center">
            Login to create & view tickets
            <br />
            <h2 className="text-2xl text-gray-500">
              Username: JollyGuru | Password: password
            </h2>
          </h1>
        </div>
      ) : (
        <div className="w-full max-w-screen-xl mx-auto px-4 mt-24">
          <div className="flex justify-end mb-4">
            <Link
              to="/create"
              className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-neutral-600 hover:text-white transition"
            >
              New Ticket
            </Link>
          </div>
          <div className="flex flex-wrap justify-between gap-6">
            {boardStates.map((status: string) => {
              const filteredTickets: TicketData[] = tickets.filter(
                (ticket) => ticket.status === status
              );
              return (
                <Swimlane
                  title={status}
                  key={status}
                  tickets={filteredTickets}
                  deleteTicket={deleteIndvTicket}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
