//import models
import dataModel from "../models/mainSchema.js";
class controller {
  async get(req, res) {
    const data = await dataModel.find();
    res.send(data);
  }
  async postData(req, res) {
    const recivedData = req.body.data;
    try {
      const newDataModel = new dataModel({
        data: recivedData,
      });
      newDataModel.save();

      const data = await dataModel.find();
      res.redirect(`/${newDataModel._id}`);
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
    try {
      if (id) {
        const getData = await dataModel.findByIdAndUpdate(id, {
          data: dataRecieved,
        });

        const data = await dataModel.find();
        res.send(data);
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
        res.send(data);
      } else {
        res.send("id not match");
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default new controller();
