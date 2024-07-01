
import { useState } from 'react';
import MemberServices from '../services/MemberServices';

const UpdateMember = ({_id,name,mobile,email}) => {
  
  const [formData, setFormData] = useState({
    name: name,
    email: email,
    mobile: mobile
  });
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleUpdate =async(e)=>{
    e.preventDefault()
   try {
    const res = await MemberServices.updateMembers({id:_id, ...formData})
    console.log(res);
    
   } catch (error) {
    console.error("Error submitting form:", error);
   }
  }


  return (
    <>
    <div>
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
         <button type="submit" className="w-full h-9 rounded-lg bg-blue-500 hover:bg-blue-700 duration-200 text-white font-semibold">update</button>
         </div>
        </form>
        </div>   
    </>
  );
};

export default UpdateMember;