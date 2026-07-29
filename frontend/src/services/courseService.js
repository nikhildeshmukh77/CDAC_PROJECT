import axios from "axios";

const u = "http://localhost:9999/api/courses";

export const getAllCourses = async () => {
  const r = await axios.get(u);
  return r.data;
};

export const getCourseDetail = async (id) => {
  const r = await axios.get(`${u}/${id}`);
  return r.data;
};

export const getCoursePlayer = async (id) => {
  const r = await axios.get(`${u}/${id}/player`);
  return r.data;
};