import React from "react";

export function RoomButton({ label, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn w-100 room-option ${
        isSelected ? "btn-primary btn-selected" : "btn-light"
      }`}
    >
      {label}
    </button>
  );
}
