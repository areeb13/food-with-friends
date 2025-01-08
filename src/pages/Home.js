import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoomButton } from "../components/RoomButton";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true); // Show loading state

    const name = event.target.elements.name.value;
    const roomCode = event.target.elements.roomName.value;

    if (!name || !roomCode) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      //TODO: add current route (NOT LOCALHOST)
      const response = await fetch("http://localhost:3001/api/join-room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, roomCode }),
      });

      if (response.ok) {
        const data = await response.json();
        // Navigate to the lobby page with server response data
        navigate("/lobby", { state: { ...data, name } });
      } else {
        const error = await response.json();
        setError(error.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="gradient-bg min-vh-100 d-flex align-items-center justify-content-center p-4">
        <div
          className="bg-white rounded-4 shadow p-4 p-md-5"
          style={{ maxWidth: "450px", width: "100%" }}
        >
          <h1 className="text-black text-center">
            Welcome To FoodWithFriends!
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>

              {/* Room Options */}
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <RoomButton
                    label="Create Room"
                    isSelected={selectedOption === "create"}
                    onClick={() => setSelectedOption("create")}
                  />
                </div>
                <div className="col-6">
                  <RoomButton
                    label="Join Room"
                    isSelected={selectedOption === "join"}
                    onClick={() => setSelectedOption("join")}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="roomName" className="form-label fw-bold">
                  Room Code
                </label>
                <input type="text" className="form-control" id="roomName" />
              </div>
              {error && <p className="text-danger">{error}</p>}

              {/* Zip Code (if available)*/}
              {selectedOption === "create" && (
                <div className="mb-3">
                  <label htmlFor="zipCode" className="form-label fw-bold">
                    Zip Code
                  </label>
                  <input type="text" className="form-control" id="zipCode" />
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading}
              >
                {loading ? "Loading..." : "GO >"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
