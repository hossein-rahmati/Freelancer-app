import { http } from "./httpService.js";

export function changeProposalStatusAPI({ proposalId, ...rest }) {
  return http
    .patch(`/proposal/${proposalId}`, rest)
    .then(({ data }) => data.data);
}

export function getProposalsAPI() {
  return http.get("/proposal/list").then(({ data }) => data.data);
}

export function createProposalAPI(data) {
  return http.post("/proposal/add", data).then((data) => data.data);
}
