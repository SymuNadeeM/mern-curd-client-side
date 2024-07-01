import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "http://localhost:8080/";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/create", formData);
      console.log(data);
      setFormData({
        name: "",
        email: "",
        mobile: ""
      });
      alert("Create successfully")
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
    <div className="px-5">
      <div className="max-w-[580px] mx-auto p-8 mt-20 bg-white shadow-xl rounded-xl">
         <div className="pb-4 border-b border-neutral-300">
         <h2 className="text-4xl text-gray-700 font-bold">Create member info</h2>
         </div>
        <form onSubmit={handleSubmit} className="space-y-2 mt-5">
          <div className="space-y-1">
            <label htmlFor="name" className="label-field">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              value={formData.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="label-field">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              value={formData.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="mobile" className="label-field">Mobile:</label>
            <input
              type="number"
              id="mobile"
              name="mobile"
              className="input-field"
              value={formData.mobile}
              onChange={handleOnChange}
            />
          </div>
         <div className="pt-5">
         <button type="submit" className="w-full h-9 rounded-lg bg-blue-500 hover:bg-blue-700 duration-200 text-white font-semibold">Submit</button>
         </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default InputForm;
