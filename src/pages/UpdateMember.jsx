import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import MemberServices from '../services/MemberServices';

const UpdateMember = ({ _id, name, mobile, email, isOpen, onClose,reloadData }) => {
  const [formData, setFormData] = useState({
    name: name,
    email: email,
    mobile: mobile,
  });
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await MemberServices.updateMembers({ id: _id, ...formData });
      console.log(res);
      reloadData()
      navigate("/")
      onClose(); // Close the modal after update
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center w-full min-h-full p-4 text-center sm:items-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="w-full bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Update Member</h3>
                  <div className="mt-2">
                    <form onSubmit={handleUpdate} className="space-y-2 mt-5">
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
                        <button
                          type="submit"
                          className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-700 duration-200 text-white font-semibold"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateMember;
