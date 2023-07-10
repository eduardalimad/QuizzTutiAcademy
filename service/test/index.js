import { http } from "../config/index";

export default {
    ListQuestions: async () => {
        return await http.get(`questions/1/1/1805`);
    },
    SendQuestion: async (data) => {
        return await http.post(`questions`, data)
      },
}