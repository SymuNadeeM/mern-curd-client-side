import requests from "./httpsRequest"

const MemberServices = {
  getAllMembers : async()=>{
    return requests.get("/")
  },
  createMembers : async (body)=>{
    return requests.post("/create",body)
  },
  updateMembers: async (body)=>{
    return requests.put("/update",body)
  }
    
}

export default MemberServices