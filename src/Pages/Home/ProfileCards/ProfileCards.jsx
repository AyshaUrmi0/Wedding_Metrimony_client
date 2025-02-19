import React, { useEffect, useState } from "react";
import PremiumCards from "../PremiumCards/PremiumCards";

const ProfileCards = () => {
  const [profiles, setProfiles] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  useEffect(() => {
    fetchProfiles(sortOrder);
  }, [sortOrder]);

  const fetchProfiles = (order) => {
    fetch(`http://localhost:5000/biodatas?sort=${order}`)
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error("Error fetching profiles:", err));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <section>
      <div className="py-12 how-it-works-section">
        <div className="container mx-auto">
          {/* Title Section */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-custom-pink">
              <span className="pb-1 border-b-4 border-yellow-500">
                Premium Profiles
              </span>
            </h2>
          </div>
          {/* Sort Dropdown */}
          <div className="mb-6 text-center">
            <label htmlFor="sort" className="mr-2 text-lg font-medium">
              Sort by Age:
            </label>
            <select
              id="sort"
              className="px-4 py-2 border rounded-lg"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 font-cinzel">
        {profiles.map((item) => (
          <PremiumCards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProfileCards;
