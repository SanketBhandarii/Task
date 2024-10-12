import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function User() {
  const [username, setUsername] = useState("");
  const [social, setSocial] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleForm = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("social", social);
    formData.append("file", avatar);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMsg(response.data.msg);
      setTimeout(() => {
        setAvatar("");
        setUsername("");
        setSocial("");
        setMsg(null);
      }, 2500);
    } catch (error) {
      console.log(error);
      setMsg("Error uploading data.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          {msg ? (
            <span className="text-green-300">{msg}</span>
          ) : (
            "Fill your details"
          )}
        </h2>
        <form
          className="space-y-4"
          encType="multipart/form-data"
          onSubmit={handleForm}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="socialhandle"
            placeholder="Social Handle"
            value={social}
            onChange={(e) => setSocial(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="file"
            name="file"
            placeholder="Avatar"
            onChange={(e) => setAvatar(e.target.files[0])}
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Submit details
          </button>
        </form>
        <div className="mt-4 text-center">
          <NavLink 
            to={"/allusers"} 
            className="inline-block bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition duration-300 transform hover:scale-105 shadow-lg">
            Show All Users
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default User;
