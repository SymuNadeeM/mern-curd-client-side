import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL= "http://localhost:8080/"

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile:""
  })

  const handleOnChange =(e)=>{
    const {value,name} = e.target
    setFormData((prev)=>{
       return{
        ...prev,
        [name] : value
       }
    })
  }

const handleSubmit =(e)=>{
  e.preventDefault()
  console.log(formData);
}

  return (
    <>
      
         <div className="max-w-[580px] mx-auto p-8 mt-20 bg-white shadow-xl">
             <form onSubmit={handleSubmit} className="space-y-2">
                <div className="space-y-1">
                  <label htmlFor="name" className="label-field">Name :</label>
                  <input type="text" id="name" name="name" className="input-field" onChange={handleOnChange} />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="label-field">Email :</label>
                  <input type="email" id="email" name="email" className="input-field" onChange={handleOnChange} />
                </div>
                <div className="space-y-1">
                  <label htmlFor="mobile" className="label-field">Mobile :</label>
                  <input type="number" id="mobile" name="mobile" className="input-field" onChange={handleOnChange} />
                </div>
                <button>Submit</button>
             </form>
         </div>
     
    </>
  );
};

export default InputForm;