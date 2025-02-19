import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Authcontext from "../../context/Authcontext/Authcontext";

const EditBiodata = () => {
  const { user } = useContext(Authcontext);
  const axiosSecure = useAxiosPublic();

  // State for form fields
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    age: "",
    father: "",
    mother: "",
    partnerAge: "",
    partnerHeight: "",
    mobile: "",
    height: "",
    weight: "",
    occupation: "",
    race: "",
    division: "",
    presentDivision: "",
    partnerWeight: "",
  });

  const divisions = [
    "Dhaka",
    "Chittagong",
    "Rangpur",
    "Barisal",
    "Khulna",
    "Mymensingh",
    "Sylhet",
  ];

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const bioData = {
      ...formData,
      gender,
      date,
      role: "user", // Ensuring the role is included
      email: user?.email,
    };

    axiosSecure.post("/biodatas", bioData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${bioData.name} Data Successfully Saved`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        console.error("Error saving biodata:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while saving the data!",
        });
      });

    e.target.reset();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Create Biodata
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Gender */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Gender</label>
            <select
              onChange={(e) => setGender(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Name</label>
            <input type="text" name="name" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Date of Birth */}
          <div className="w-full">
            <label className="block mb-2 font-semibold text-gray-700">Date of Birth</label>
            <div className="w-full border-2 rounded-lg">
              <DatePicker selected={date} onChange={(date) => setDate(date)} required className="w-full px-4 py-2 border-none focus:outline-none" />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Mobile</label>
            <input type="text" name="mobile" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Height */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Height</label>
            <input type="text" name="height" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Weight */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Weight</label>
            <input type="text" name="weight" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Occupation */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Occupation</label>
            <input type="text" name="occupation" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Division */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Division</label>
            <select name="division" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option value="">Select Division</option>
              {divisions.map((div) => (
                <option key={div} value={div}>{div}</option>
              ))}
            </select>
          </div>

          {/* Present Division */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Present Division</label>
            <select name="presentDivision" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option value="">Select Present Division</option>
              {divisions.map((div) => (
                <option key={div} value={div}>{div}</option>
              ))}
            </select>
          </div>

          {/* Father's Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Father's Name</label>
            <input type="text" name="father" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Mother's Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Mother's Name</label>
            <input type="text" name="mother" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>

        <button type="submit" className="w-full px-4 py-2 mt-6 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
          Publish Now
        </button>
      </form>
    </div>
  );
};

export default EditBiodata;
