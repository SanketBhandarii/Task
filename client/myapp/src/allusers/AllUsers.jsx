import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllUsers() {
  const [users, setUsers] = useState([]); // State to hold users
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle any errors

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/getusers");
        setUsers(response.data.all); // Assuming response.data.all contains the array of users
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Render loading state or error message if applicable
  if (loading) return <div className="text-white text-lg">Loading users...</div>;
  if (error) return <div className="text-red-500">Error fetching users: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white">All Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <div key={user._id} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img 
                src={user.avatar} 
                alt={`${user.username}'s avatar`} 
                className="w-16 h-16 rounded-full border-2 border-indigo-500"
              />
              <div className="ml-4">
                <h2 className="text-xl text-white">{user.username}</h2>
                <p className="text-indigo-400">{user.social}</p>
              </div>
            </div>
            <p className="text-gray-400">
              <span className="font-semibold text-white">User ID:</span> {user._id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllUsers;
