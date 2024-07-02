import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import MemberServices from "../services/MemberServices";
import UpdateMember from "./UpdateMember";

const AllMemberList = () => {
  const [dataList, setDataList] = useState([]);
  const [editMode, setEditeMode] = useState(null)

  const getAllDataList = async () => {
    try {
      const res = await MemberServices.getAllMembers()
      console.log(res);
      setDataList(res.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    getAllDataList();
  }, []);
 
 const updateClickMember = (id)=>{
  setEditeMode(id)
 }

 const deleteClickMember = async(id)=>{
  try {
    const res = await MemberServices.deleteMembers(id)
    console.log(res);
    
   } catch (error) {
    console.error("Error submitting form:", error);
   }
 }
  return (
    <>
      <div className="px-5 lg:mb-20">
        <div className="max-w-[1000px] mx-auto p-8 mt-20 bg-white shadow-xl rounded-xl">
          <div className="pb-4 border-b border-neutral-300">
            <h2 className="text-4xl text-gray-700 capitalize font-bold">
              All member List
            </h2>
            
          </div>
          <div className="mt-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataList.map((dataList, index) => (
                    <tr key={index} className="border-b border-neutral-400">
                      <td className="px-6 py-4">{dataList.name}</td>
                      <td className="px-6 py-4">{dataList.email}</td>
                      <td className="px-6 py-4">{dataList.mobile}</td>
                      <td className="px-6 py-4 flex items-center gap-5">
                         <button onClick={()=>updateClickMember(dataList._id)} >
                          <FaRegEdit />
                          </button>
                         <button>
                          <RiDeleteBin6Line onClick={()=>deleteClickMember(dataList._id)} />
                          </button>
                      </td>
                      {
                        editMode === dataList._id &&  <UpdateMember {...dataList} />
                      }
                    </tr>
                    
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMemberList;
