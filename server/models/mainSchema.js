import mongoose from "mongoose";
//create model
const dataSchema = new mongoose.Schema({
  data: {
    type: String,
  },
});

const dataModel = mongoose.model("dataModel", dataSchema);

export default dataModel;
