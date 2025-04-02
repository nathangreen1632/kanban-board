import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData.ts';
import { UserData } from '../interfaces/UserData.ts';
import { retrieveUsers } from '../api/userAPI';

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<TicketData>({
    id: 0,
    name: '',
    description: '',
    status: 'Todo',
    assignedUserId: 1,
    assignedUser: null,
  });

  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[]>([]);

  const getAllUsers = async (): Promise<void> => {
    try {
      const response = await retrieveUsers();
      if (response.success && response.data) {
        setUsers(response.data);
      } else {
        console.warn('User data not available:', response.message);
      }
    } catch (err) {
      console.error('Failed to retrieve user info:', err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newTicket) {
      const data = await createTicket(newTicket);
      console.log(data);
      navigate('/');
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleUserChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => (prev ? { ...prev, [name]: Number(value) } : undefined));
  };

  return (
    <div className="flex justify-center items-center min-h-[1000px] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-500 shadow-md rounded-lg p-8 w-full max-w-xl space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-white">Create Ticket</h1>

        <div>
          <label htmlFor="tName" className="block text-sm font-medium text-white mb-1">
            Ticket Name
          </label>
          <textarea
            id="tName"
            name="name"
            value={newTicket?.name ?? ''}
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
            value={newTicket?.status ?? ''}
            onChange={handleTextChange}
            className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-rose-500"
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
            value={newTicket?.description ?? ''}
            onChange={handleTextAreaChange}
            className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-rose-500"
          />
        </div>

        <div>
          <label htmlFor="tUserId" className="block text-sm font-medium text-white mb-1">
            Assigned User
          </label>
          <select
            name="assignedUserId"
            id="tUserId"
            value={newTicket?.assignedUserId ?? ''}
            onChange={handleUserChange}
            className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-rose-500"
          >
            {users.map((user) => (
              <option key={user.id} value={String(user.id)}>
                {user.username}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-neutral-300 text-black font-medium py-2 px-4 rounded-md hover:bg-black hover:text-white transition"
        >
          Submit Ticket
        </button>
      </form>

    </div>
  );
};

export default CreateTicket;
