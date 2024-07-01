

const InputForm = () => {
  return (
    <>
      
         <div className="max-w-[580px] mx-auto p-8 mt-20 bg-white shadow-xl">
             <form action="#" className="space-y-2">
                <div className="space-y-1">
                  <label htmlFor="name" className="label-field">Name :</label>
                  <input type="text" id="name" name="name" className="input-field" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="label-field">Email :</label>
                  <input type="email" id="email" name="email" className="input-field" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="mobile" className="label-field">Mobile :</label>
                  <input type="number" id="mobile" name="mobile" className="input-field" />
                </div>
                <button>Submit</button>
             </form>
         </div>
     
    </>
  );
};

export default InputForm;