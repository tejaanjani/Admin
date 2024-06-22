import { useState } from "react";
import "./Dashboard.css";

const AdminDashboard = () => {
  const [recipientType, setRecipientType] = useState("both");
  const [farmerFilter, setFarmerFilter] = useState("");
  const [farmerSubFilter, setFarmerSubFilter] = useState("all");
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFarmers, setSelectedFarmers] = useState([]);
  const [farmerList] = useState([
    "Ramesh",
    "Suresh",
    "Anitha",
    "Bhavitha",
    "Lokesh",
  ]);

  const handleRecipientChange = (e) => {
    setRecipientType(e.target.value);
  };

  const handleFarmerFilterChange = (e) => {
    setFarmerFilter(e.target.value);
    setFarmerSubFilter("all");
  };

  const handleFarmerSubFilterChange = (e) => {
    setFarmerSubFilter(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFarmerSelection = (farmer) => {
    setSelectedFarmers((prevSelected) =>
      prevSelected.includes(farmer)
        ? prevSelected.filter((f) => f !== farmer)
        : [...prevSelected, farmer]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      recipientType,
      farmerFilter,
      farmerSubFilter,
      searchQuery,
      selectedFarmers,
      message,
    });
  };

  const filteredFarmers = farmerList.filter((farmer) =>
    farmer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="recipientType">Send To:</label>
            <select
              id="recipientType"
              value={recipientType}
              onChange={handleRecipientChange}
            >
              <option value="volunteer">Volunteer</option>
              <option value="farmer">Farmer</option>
              <option value="both">Both</option>
            </select>
          </div>

          {recipientType === "farmer" && (
            <>
              <div className="form-group">
                <label htmlFor="farmerFilter">Filter Farmers By:</label>
                <select
                  id="farmerFilter"
                  value={farmerFilter}
                  onChange={handleFarmerFilterChange}
                >
                  <option value="">-- Select Filter --</option>
                  <option value="village">Village Area</option>
                  <option value="crop">Crop</option>
                  <option value="region">Region</option>
                  <option value="farmSize">Farm Size</option>
                </select>
              </div>

              {farmerFilter && (
                <div className="form-group">
                  <label htmlFor="farmerSubFilter">{farmerFilter}:</label>
                  <select
                    id="farmerSubFilter"
                    value={farmerSubFilter}
                    onChange={handleFarmerSubFilterChange}
                  >
                    <option value="all">All</option>
                    {/* Dynamically generate options based on the filter selected */}
                    {farmerFilter === "village" && (
                      <>
                        <option value="village1">Village 1</option>
                        <option value="village2">Village 2</option>
                        <option value="village3">Village 3</option>
                        <option value="village1">Village 4</option>
                        <option value="village2">Village 5</option>
                        <option value="village3">Village 6</option>
                      </>
                    )}
                    {farmerFilter === "crop" && (
                      <>
                        <option value="crop1">Crop 1</option>
                        <option value="crop2">Crop 2</option>
                        <option value="crop3">Crop 3</option>
                        <option value="crop1">Crop 4</option>
                        <option value="crop2">Crop 5</option>
                        <option value="crop3">Crop 6</option>
                      </>
                    )}
                    {farmerFilter === "region" && (
                      <>
                        <option value="region1">Region 1</option>
                        <option value="region2">Region 2</option>
                        <option value="region3">Region 3</option>
                        <option value="region1">Region 4</option>
                        <option value="region2">Region 5</option>
                        <option value="region3">Region 6</option>
                      </>
                    )}
                    {farmerFilter === "farmSize" && (
                      <>
                        <option value="small">Small(1-5 Acres)</option>
                        <option value="medium">Medium(5-10 Acres)</option>
                        <option value="large">Large(more than 10 acres)</option>
                      </>
                    )}
                  </select>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="searchQuery">Search Farmer by Name:</label>
                <input
                  type="text"
                  id="searchQuery"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                  placeholder="Enter farmer name"
                />
                {searchQuery && (
                  <ul className="search-results">
                    {filteredFarmers.map((farmer) => (
                      <li key={farmer}>
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedFarmers.includes(farmer)}
                            onChange={() => handleFarmerSelection(farmer)}
                          />
                          {farmer}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
