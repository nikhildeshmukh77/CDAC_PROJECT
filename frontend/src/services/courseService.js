import apiClient from "./apiClient";

const u = "/courses";

export const getAllCourses = async () => {
  const r = await apiClient.get(u);
  return r.data;
};

export const getCourseDetail = async (id) => {
  const r = await apiClient.get(`${u}/${id}`);
  return r.data;
};

export const getCoursePlayer = async (id) => {
  const r = await apiClient.get(`${u}/player/${id}`);
  return r.data;
};
