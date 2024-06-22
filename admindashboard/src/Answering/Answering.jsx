import { useState } from "react";
import "./Answering.css";

const Answering = () => {
  const [queries] = useState([
    {
      id: 1,
      type: "text",
      content: "How to improve crop yield?",
      farmer: "Farmer John",
    },
    { id: 2, type: "image", content: "image-url-1", farmer: "Farmer Jane" },
    { id: 3, type: "audio", content: "audio-url-1", farmer: "Farmer Joe" },
  ]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [response, setResponse] = useState("");

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
    setResponse("");
  };

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleBackClick = () => {
    setSelectedQuery(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to submit the response
    console.log({ queryId: selectedQuery.id, response });
    alert("Response submitted successfully!");
  };

  return (
    <div className="admin-query-response">
      <h1>Admin Query Response</h1>
      {!selectedQuery ? (
        <div className="queries-list">
          {queries.map((query) => (
            <div
              key={query.id}
              className="query-item"
              onClick={() => handleQueryClick(query)}
            >
              <p>
                <strong>Farmer:</strong> {query.farmer}
              </p>
              <p>
                <strong>Type:</strong> {query.type}
              </p>
              {query.type === "text" ? (
                <p>
                  <strong>Content:</strong> {query.content}
                </p>
              ) : (
                <p>
                  <strong>Content:</strong>{" "}
                  <a
                    href={query.content}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View {query.type}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="response-form">
          <button onClick={handleBackClick} className="back-button">
            Back to Queries
          </button>
          <h3>Respond to Query from {selectedQuery.farmer}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="response">Your Response:</label>
              <textarea
                id="response"
                value={response}
                onChange={handleResponseChange}
                required
              />
            </div>
            <button type="submit">Send Response</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Answering;
