import express, { Request, Response } from "express";
import ItemModel, { Iitem } from "../Model/SuperMarketModel";

export const createItem = async (
  req: Request<{}, {}, Iitem>,
  res: Response
) => {
  try {
    const { name, price, quantity } = req.body;
    const AddNewItem = await ItemModel.create({
      name,
      price,
      quantity,
    });
    return res.status(201).json({
      message: "Item added successfully",
      data: AddNewItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating",
      data: error,
    });
  }
};

export const getAnItem = async (req: Request, res: Response) => {
  try {
    const item = await ItemModel.findById(req.params.ItemID);
    if (!item) {
      return res.status(404).json("ItemID not found");
    }
    return res.status(200).json({
      message: "Item found",
      data: item,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Item not found",
      data: error,
    });
  }
};

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await ItemModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "All items Gotten",
      data: items,
    });
  } catch (error) {
    return res.status(500).json({
      message: "UNable to find items",
      data: error,
    });
  }
};

export const updateItem = async (req: Request, res: Response) => {
    try {
      const { name, price, quantity } = req.body;
      const item = await ItemModel.findByIdAndUpdate(
        req.params.ItemID,
        {
          name,
          price,
          quantity
        },
        { new: true }
      );
      if (!item) {
        return res.status(404).json({ message: "ItemID not found" });
      }
      return res.status(201).json({
        message: "Item successfully updated",
        data: item,
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };

  export const deleteItem = async(req:Request, res:Response) => {
    try {
        const item = await ItemModel.findByIdAndDelete(req.params.ItemID)
        if (!item) {
            return res.status(404).json("ItemID not found")
        }
        res.status(200).json({
            message: "Item deleted",
            data: item
        })
    } catch (error) {
        res.sendStatus(404).json({
            message: "Item not found",
            data: error
        })
    }
  }