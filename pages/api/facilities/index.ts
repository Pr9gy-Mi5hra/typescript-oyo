import { NextApiRequest, NextApiResponse } from "next";
import HotelModel from "@/models/hotel-model";

import connectDB from "@/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    await connectDB();
    try {
      const facilities = await HotelModel.find({}).distinct("facilities.name");
      res.status(200).json({ msg: "Achha Lagta hai !", facilities });
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}


// import Hotel from "@/models/hotel-model";

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     connectDB();
//     const facilities = await Hotel.find({}).distinct("facilities.name");
//     res.status(200).json({ msg: "Achha Lagta hai !", facilities });
//   }
// }