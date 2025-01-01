//this will have title of room code & list of players in lobby
import React from "react";

export default function Lobby({ room }) {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container text-center border rounded shadow p-4" style={{ maxWidth: "33.33%" }}>
                    <h1 className="mb-4">LOBBY: {room}</h1>
                    <ul className="list-group mb-4">
                        <li className="list-group-item">Default Player 1</li>
                        <li className="list-group-item">Default Player 2</li>
                        <li className="list-group-item">Default Player 3</li>
                        <li className="list-group-item">Default Player 4</li>
                        <li className="list-group-item">Default Player 5</li>
                    </ul>
                    <button type="submit" className="btn btn-primary btn-lg">Start</button>
                </div>
            </div>
        </>
    );
}
