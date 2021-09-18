import express from "express";
const router = express.Router();

import controller from "./controller.js";

router.get("/", controller.get);
router.post("/", controller.postData);
router.get("/:id", controller.getById);
router.patch("/:id", controller.duplicateData);
router.delete("/:id", controller.deleteData);

export default router;
