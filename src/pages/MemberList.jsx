import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import MemberServices from "../services/MemberServices";
import UpdateMember from "./UpdateMember";

const MemberList = () => {
  const [dataList, setDataList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const getAllDataList = async () => {
    try {
      const res = await MemberServices.getAllMembers();
      console.log(res);
      setDataList(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllDataList();
  }, []);

  const updateClickMember = (member) => {
    setSelectedMember(member);
    setEditMode(true);
  };

  const closeModal = () => {
    setEditMode(false);
    setSelectedMember(null);
  };

  const deleteClickMember = async (id) => {
    try {
      const res = await MemberServices.deleteMembers(id);
      console.log(res);
      alert("Delete member")
      getAllDataList(); 
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  return (
    <>
      <div className="px-5 lg:mb-20">
        <div className="max-w-[1000px] mx-auto p-8 mt-20 bg-white shadow-xl rounded-xl">
          <div className="pb-3 border-b border-neutral-300 flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl md:text-2xl lg:text-4xl text-gray-700 capitalize font-bold font-mono tracking-tighter">
              All Member List
            </h2>
            <div className="flex items-center justify-end mt-2.5 md:mt-0">
            <Link to={"/create-member"}>             
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-1.5 md:py-2.5 text-center me-2 mb-2 flex items-center gap-3"><MdOutlineBookmarkAdded size={22}/> <span>Add Member</span></button>
            </Link>
            </div>
          </div>
          {dataList.length > 0 ? (
            <div className="mt-10">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-sm text-gray-700 capitalize bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Mobile
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="custom-tbody">
                    {dataList.map((member, index) => (
                      <tr key={index} className="text-sm border-b border-neutral-400">
                        <td className="px-6 py-4">{member.name}</td>
                        <td className="px-6 py-4">{member.email}</td>
                        <td className="px-6 py-4">{member.mobile}</td>
                        <td className="px-6 py-4 flex items-center gap-5">
                          <button
                            onClick={() => updateClickMember(member)}
                            className="open-with-modal"
                          >
                            <FaRegEdit size={22} className="text-green-700" />
                          </button>
                          <button>
                            <RiDeleteBin6Line
                              size={22}
                              onClick={() => deleteClickMember(member._id)}
                              className="text-red-700"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="mt-5 p-4 bg-[#FF4A4A] rounded flex items-center justify-center">
              <div className="flex items-center gap-3">
              <ImFilesEmpty size={22} className="text-white" />
              <h4 className=" text-white font-medium">No Data is Here</h4>
              </div>
            </div>
          )}
        </div>
      </div>

      {editMode && selectedMember && (
        <UpdateMember
          isOpen={editMode}
          onClose={closeModal}
          _id={selectedMember._id}
          name={selectedMember.name}
          email={selectedMember.email}
          mobile={selectedMember.mobile}
          reloadData={getAllDataList}
        />
      )}
    </>
  );
};

export default MemberList;
