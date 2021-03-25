import { api } from "./apiService";
const model = "admins";
export const service = {
  login: (data) => {
    return api.invoke("POST", `${model}/login`, data);
  },
};
