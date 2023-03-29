import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/* router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.status(200).send({ message: "Hello User , You are authenticated!" });
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.status(200).send({
    message: "Hello Userr ,  You Are Delete Or Update your account !",
  });
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res
    .status(200)
    .send({ message: "Hello admin ,  You Are Delete Or Update all account !" });
}); */

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET USER
router.get("/:id", verifyUser, getUser);

//GET ALL USERS
router.get("/", verifyAdmin, getAllUsers);

export default router;
