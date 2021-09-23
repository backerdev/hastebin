//import models
import dataModel from "../models/mainSchema.js";
class controller {
  async get(req, res) {
    const data = await dataModel.find();
    res.send(data);
  }
  async postData(req, res) {
    console.log("post data");
    const recivedData = req.body.data;
    const recivedCount = req.body.count;
    try {
      const newDataModel = new dataModel({
        data: recivedData,
        count: recivedCount,
      });
      newDataModel.save();

      res.send(newDataModel._id);
      console.log("backend: " + newDataModel._id);
    } catch (error) {
      console.error(error);
    }
  }

  async getById(req, res) {
    const id = req.params.id;
    try {
      if (id) {
        const getData = await dataModel.findById(id);
        res.send(getData);
      } else {
        res.send("no id found");
      }
    } catch (error) {
      console.error(error);
    }
  }
  async duplicateData(req, res) {
    const id = req.params.id;
    const dataRecieved = req.body.data;
    const countRecieved = req.body.count;
    try {
      if (id) {
        const newData = await dataModel.findByIdAndUpdate(id, {
          data: dataRecieved,
          count: countRecieved,
        });

        console.log(`server : ${newData}`);
        res.send(newData);
      } else {
        res.send("no id found");
      }
    } catch (error) {
      console.error(error);
    }
  }
  async deleteData(req, res) {
    const id = req.params.id;
    try {
      if (id) {
        await dataModel.findByIdAndDelete(id);
        const data = await dataModel.find();
      } else {
        res.send("id not match");
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default new controller();
