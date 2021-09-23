import { Link, Redirect, useHistory } from "react-router-dom";
import RedirectAfter from "../components/redirectAfter.js";
import http from "./baseUrl.js";

class Importer {
  async dataPost(data, count) {
    const id = await http.post("/", { data, count });
    console.log("api: " + id);
    return id;
  }
  async dataget(id) {
    console.log("get single");
    const { data } = await http.get(`/${id}`);
    console.log(data);

    return data;
  }
  async updateData(id, data, count) {
    console.log(`id: ${id}, data: ${data}, count: ${count}`);
    console.log("update api");

    const returnId = await http.patch(`/${id}`, { data, count });
    return returnId;
  }
  async deleteData(id) {
    console.log("delete api");

    await http.delete(`/${id}`);
  }
}

export default new Importer();
