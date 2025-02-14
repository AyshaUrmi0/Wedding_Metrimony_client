import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { Button, Input, Select, Option } from '@material-tailwind/react';
import Authcontext from '../../context/Authcontext/Authcontext';
import useAxiosPublic from '../../hooks/useAxiosPublic';



const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const EditBiodata = ({ existingBiodata, onSuccess }) => {
  const { user } = useContext(Authcontext);
  const axiosPublic=useAxiosPublic();

  const [biodata, setBiodata] = useState({
    gender: existingBiodata?.gender || 'Male',
    name: existingBiodata?.name || '',
    profileImage: existingBiodata?.profileImage || '',
    dob: existingBiodata?.dob || '',
    height: existingBiodata?.height || '',
    weight: existingBiodata?.weight || '',
    age: existingBiodata?.age || '',
    occupation: existingBiodata?.occupation || '',
    race: existingBiodata?.race || '',
    fatherName: existingBiodata?.fatherName || '',
    motherName: existingBiodata?.motherName || '',
    permanentDivision: existingBiodata?.permanentDivision || '',
    presentDivision: existingBiodata?.presentDivision || '',
    partnerAge: existingBiodata?.partnerAge || '',
    partnerHeight: existingBiodata?.partnerHeight || '',
    partnerWeight: existingBiodata?.partnerWeight || '',
    email: existingBiodata?.email || user?.email || '',
    mobile: existingBiodata?.mobile || '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiodata((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    console.log(e);

    
    e.preventDefault();

    // Required fields validation
    const requiredFields = {
      gender: 'Gender',
      name: 'Name',
      profileImage: 'Profile Image Link',
      dob: 'Date of Birth',
      height: 'Height',
      weight: 'Weight',
      occupation: 'Occupation',
      race: 'Race',
      permanentDivision: 'Permanent Division',
      presentDivision: 'Present Division',
      mobile: 'Mobile Number',
    };

    const missingFields = Object.keys(requiredFields).filter((field) => !biodata[field]);

    if (missingFields.length > 0) {
      const missingFieldNames = missingFields.map((field) => requiredFields[field]).join(', ');
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: `Please fill in the following fields: ${missingFieldNames}`,
      });
      return;
    }

    try {
      let response;
      if (existingBiodata) {
        // Update existing biodata
        response = await fetch(`http://localhost:5000/biodata/${existingBiodata.id}`, {
          method: 'PUT',
          body: JSON.stringify(biodata),
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        const imageFile={image:data.image[0]},
        response = await axiosPublic.post(image_hosting_api, imageFile,{
         headers:{
              'Content-Type':'multipart/form-data'
         }
        });
        console.log(response);
      }

      const result = await response.json();

      if (response.ok) {
        Swal.fire('Success', existingBiodata ? 'Biodata updated successfully!' : 'Biodata created successfully!', 'success');
        onSuccess(result.data);
      } else {
        Swal.fire('Error', result.message || 'An error occurred!', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'An error occurred while submitting the biodata.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-xl font-bold text-center">Edit Biodata</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Biodata Type</label>
          <Select name="gender" value={biodata.gender} onChange={(e) => setBiodata((prev) => ({ ...prev, gender: e }))}>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" name="name" value={biodata.name} onChange={handleChange} required />
        </div>

        {/* Profile Image Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Image Link</label>
          <Input type="file" name="profileImage" value={biodata.profileImage} onChange={handleChange} required />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <Input type="date" name="dob" value={biodata.dob} onChange={handleChange} required />
        </div>

        {/* Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <Input type="number" name="height" value={biodata.height} onChange={handleChange} required />
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <Input type="number" name="weight" value={biodata.weight} onChange={handleChange} required />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <Input type="number" name="age" value={biodata.age} onChange={handleChange} />
        </div>

        {/* Occupation */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Occupation</label>
          <Input type="text" name="occupation" value={biodata.occupation} onChange={handleChange} required />
        </div>

        {/* Race */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Race (Skin Color)</label>
          <Input type="text" name="race" value={biodata.race} onChange={handleChange} required />
        </div>

        {/* Father's Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Father's Name</label>
          <Input type="text" name="fatherName" value={biodata.fatherName} onChange={handleChange} />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
          <Input type="text" name="motherName" value={biodata.motherName} onChange={handleChange} />
        </div>

        {/* Permanent Division */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Permanent Division</label>
          <Select name="permanentDivision" value={biodata.permanentDivision} onChange={(e) => setBiodata((prev) => ({ ...prev, permanentDivision: e }))}>
            <Option value="Dhaka">Dhaka</Option>
            <Option value="Chattagram">Chattagram</Option>
            <Option value="Rangpur">Rangpur</Option>
            <Option value="Barisal">Barisal</Option>
            <Option value="Khulna">Khulna</Option>
            <Option value="Mymensingh">Mymensingh</Option>
            <Option value="Sylhet">Sylhet</Option>
          </Select>
        </div>

        {/* Present Division */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Present Division</label>
          <Select name="presentDivision" value={biodata.presentDivision} onChange={(e) => setBiodata((prev) => ({ ...prev, presentDivision: e }))}>
            <Option value="Dhaka">Dhaka</Option>
            <Option value="Chattagram">Chattagram</Option>
            <Option value="Rangpur">Rangpur</Option>
            <Option value="Barisal">Barisal</Option>
            <Option value="Khulna">Khulna</Option>
            <Option value="Mymensingh">Mymensingh</Option>
            <Option value="Sylhet">Sylhet</Option>
          </Select>
        </div>

        {/* Expected Partner Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Expected Partner Age</label>
          <Input type="number" name="partnerAge" value={biodata.partnerAge} onChange={handleChange} />
        </div>

        {/* Expected Partner Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Expected Partner Height (cm)</label>
          <Input type="number" name="partnerHeight" value={biodata.partnerHeight} onChange={handleChange} />
        </div>

        {/* Expected Partner Weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Expected Partner Weight (kg)</label>
          <Input type="number" name="partnerWeight" value={biodata.partnerWeight} onChange={handleChange} />
        </div>

        {/* Contact Email (Readonly) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Email</label>
          <Input type="email" name="email" value={biodata.email} readOnly />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <Input type="tel" name="mobile" value={biodata.mobile} onChange={handleChange} required />
        </div>
      </div>

      <div className="mt-6 text-center">
        <Button type="submit " className='bg-custom-pink' >
          {existingBiodata ? 'Update Biodata' : 'Save and Publish now'}
        </Button>
      </div>
    </form>
  );
};

export default EditBiodata;
