import { Router, Request, Response } from "express";
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent} from "../controller/userController";

const router = Router();

router.route("/home").get((rer: Request, res: Response) => {
  return res.status(200).json({
    message: `Welcome Home🚀🚀🚀🌍 `,
  });
});

router.post("/create", createStudent)
router.get("/getall", getAllStudents)
router.get("/getOne/:studentID", getSingleStudent)
router.patch("/update-profile/:studentID", updateStudent)
router.delete("/delete-profile/:studentID", deleteStudent)
export default router;
