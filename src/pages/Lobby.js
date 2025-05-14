//this will have title of room code & list of players in lobby
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Lobby({ room }) {
  const navigate = useNavigate();
  const names = ["joe", "jim", "bill"];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStart = async (event) => {
    setLoading(true);
    setError("");

    try {

      // If successful, navigate to restaurants page
      navigate("/restaurants");
    } catch (error) {
      setError("Unable to Continue, Try Again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gradient-bg min-vh-100 d-flex align-items-center justify-content-center p-4">
      <div
        className="bg-white rounded-4 shadow p-4 p-md-5"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <h1 className="text-black text-center mb-4 fw-bold">LOBBY: {room}</h1>
        <div className="mb-4">
          {/* List of lobby members */}
          <ul className="list-group">
            {names.map((name) => (
              <li
                key={name}
                className="list-group-item text-center mb-3 border-2 border-purple fw-bold"
                style={{ borderColor: "#6f42c1" }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={handleStart}
            disabled={loading}
          >
            {loading ? "Loading..." : "Start"}
          </button>
          {error && <p className="text-danger">{error}</p>}
        </div>
      </div>
    </div>
  );
}
