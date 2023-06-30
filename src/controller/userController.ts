import { Request, Response } from "express";
import userModel, { iUser } from "../model/User";
import { appendFile } from "fs/promises";

export const createStudent = async (req: Request<{}, {}, iUser>,
  res: Response
) => {
  try {
    const { name, email, age, hobbies, gender } = req.body;
    const newStudent = await userModel.create({
      name,
      age,
      email,
      hobbies,
      gender,
    });
    res.status(201).json({
      message: "Student created",
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating student",
    });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const student = await userModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Student data gotten successfully",
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to retrieve student data",
      data: error,
    });
  }
};

export const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const student = await userModel.findById(req.params.studentID);
    if (!student) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User successfully",
      data: student,
    });
  } catch (error) {
    return res.status(500).json({ message: "User error", data: error });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const student = await userModel.findByIdAndUpdate(
      req.params.studentID,
      {
        name,
        age,
      },
      { new: true }
    );
    if (!student) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(201).json({
      message: "User successfully",
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const student = await userModel.findByIdAndDelete(req.params.studentID);
    if (!student) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User successfully",
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
