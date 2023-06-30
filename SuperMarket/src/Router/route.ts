import {Router, Request, Response} from "express"
import { createItem, deleteItem, getAllItems, getAnItem, updateItem } from "../Controller/SuperMarketController"

const router= Router()

router.route("/home").get((req: Request, res: Response) => {
    return res.status(200).json({
      message: `Welcome Home🚀🚀🚀🌍 `,
    });
  });

router.post("/create", createItem)
router.get("/one-item/:ItemID", getAnItem)
router.get("/all-item", getAllItems)
router.patch("/updateitem/:ItemID",updateItem )
router.delete("/deleteitem/:ItemID",deleteItem )

export default router;
