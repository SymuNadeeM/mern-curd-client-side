import axios from "axios";
import { useEffect, useState } from "react";

const AllMemberList = () => {
  const [dataList, setDataList] = useState([]);

  const getAllDataList = async () => {
    try {
      const data = await axios.get("/");
      console.log(data);
      setDataList(data.data);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    getAllDataList();
  }, []);

  console.log(dataList);
  return (
    <>
      <div className="px-5">
        <div className="max-w-[580px] mx-auto p-8 mt-20 bg-white shadow-xl rounded-xl">
          <div className="pb-4 border-b border-neutral-300">
            <h2 className="text-4xl text-gray-700 capitalize font-bold">
              All member List
            </h2>
          </div>
          <div>
            {dataList?.data?.map((dataList,index)=>(
              <div key={index}>
                <h4>{dataList.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMemberList;
