import { http } from "./httpService.js";

export function changeProposalStatusAPI({ id, data }) {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}
