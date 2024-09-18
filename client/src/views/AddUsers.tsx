import { useMutation } from '@tanstack/react-query';

import './CSS/AddUsers.css';

function AddUsers() {
  return (
    <>
      <div>
        <form>
          <label htmlFor="user">
            Person's Name:
            <input type="text" id="user" name="user" />
          </label>

          <label htmlFor="handles">
            Handles:
            <input type="text" id="handles" name="handles" />
          </label>

          <input type="submit" placeholder="Submit New User" />
        </form>
      </div>
    </>
  );
}

export default AddUsers;
