import { http } from "../config/index";

export default {
    ListQuestions: async (id_course,id_modulo) => {
        return await http.get(`questions/${id_course}/${id_modulo}`);
    },
    SendQuestion: async (data) => {
        return await http.post(`questions`, data)
      },
}