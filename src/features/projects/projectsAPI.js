import axios from "../../utils/axios";
export const getProjects = async () => {
  const response = await axios.get("/projects");

  return response.data;
};
