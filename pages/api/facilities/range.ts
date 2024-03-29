import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/db";
import HotelModel from "@/models/hotel-model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    await connectDB();
    try {
      const price = parseInt(req.query.price as string); // Assuming price is a number
      const hotels = await HotelModel.find({ price: { $lte: price } });
      res.status(200).json({ msg: "Range Filter.", hotels });
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}


// import connectDB from "@/db";
// import Hotel from "@/models/hotel-model";

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     connectDB();
//     const hotels = await Hotel.find({ price: { $lte: req.query.price } });
//     res.status(200).json({ msg: "Range Filter.", hotels });
//   }
// }