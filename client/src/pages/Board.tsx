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

  const deleteIndvTicket = async (ticketId: number): Promise<ApiResponse<ApiMessage>> => {
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
        <div className="login-notice">
          <h1>Login to create & view tickets</h1>
        </div>
      ) : (
        <div className="board">
          <button type="button" id="create-ticket-link">
            <Link to="/create">New Ticket</Link>
          </button>
          <div className="board-display">
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
