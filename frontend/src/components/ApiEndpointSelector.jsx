import React from "react";

export default function APIEndpointSelector({ apiEndpoint, setApiEndpoint }) {
  return (
    <select
      onChange={(e) => setApiEndpoint(e.target.value)}
      className="mb-4 bg-gray-50 border rounded p-1"
    >
      <option value="localhost">Localhost</option>
      <option value="aws">AWS</option>
    </select>
  );
}
