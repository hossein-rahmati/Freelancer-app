import { data } from "autoprefixer";
import { http } from "./httpService";

export function getOwnerProjectsAPI() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectAPI(id) {
  return http.delete(`/project/${id}`).then(({ data }) => {
    console.log(data);
    return data.data;
  });
}
