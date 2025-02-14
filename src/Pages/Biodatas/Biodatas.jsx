import React, { useEffect, useState } from "react";
import PremiumCards from "../Home/PremiumCards/PremiumCards";

const Biodatas = () => {
  const [biodatas, setBiodatas] = useState([]);
  const [filters, setFilters] = useState({
    ageRange: "",
    type: "",
    division: "",
  });

  const fetchBiodatas = () => {
    // Build query string from filters
    const query = new URLSearchParams(filters).toString();
    fetch(`http://localhost:5000/biodatas?${query}`)
      .then((res) => res.json())
      .then((data) => setBiodatas(data))
      .catch((err) => console.error("Error fetching biodatas:", err));
  };

  // Fetch biodatas when filters change
  useEffect(() => {
    fetchBiodatas();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <div className="container py-12 mx-auto">
        <div className="flex gap-8">
          {/* Left Filter Section */}
          <aside className="w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Filters</h3>
            {/* Age Range */}
            <div className="mb-4">
              <label className="block mb-2">Age Range</label>
              <input
                type="text"
                name="ageRange"
                value={filters.ageRange}
                onChange={handleFilterChange}
                placeholder="e.g., 20-30"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            {/* Biodata Type */}
            <div className="mb-4">
              <label className="block mb-2">Biodata Type</label>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* Division */}
            <div>
              <label className="block mb-2">Division</label>
              <select
                name="division"
                value={filters.division}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">All</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
          </aside>
          {/* Right Biodata Section */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {biodatas.map((item) => (
                <PremiumCards key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biodatas;
