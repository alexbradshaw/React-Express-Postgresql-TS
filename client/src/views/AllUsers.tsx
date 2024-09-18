import { useQuery } from '@tanstack/react-query';

import './CSS/AllUsers.css';

function AllUsers() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['showtimes'],
    queryFn: async () => {
      const response = await fetch('/api/users');

      if (!response.ok) {
        throw new Error(
          'Status was ' +
            response.status +
            '. Response text: ' +
            response.statusText,
        );
      }

      const data = await response.json();

      return data.users;
    },
  });

  return (
    <>
      <ul id="usersUL">
        {isPending ? (
          <h1>How do I center a div</h1>
        ) : isError ? (
          <h1>{error.message}</h1>
        ) : (
          data.map((person: CustomDefinedUser, key: number) => (
            <li key={key}>
              <h2>
                Name: <span>{person.name}</span>
              </h2>
              <h2>
                Handles: <span>{person.handles}</span>
              </h2>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default AllUsers;
