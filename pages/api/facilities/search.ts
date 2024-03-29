import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/db";
import HotelModel from "@/models/hotel-model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    await connectDB();
    try {
      const key = req.query.val as string[]; // Assuming 'val' is an array of strings
      const hotels = await HotelModel.find({ "facilities.name": { $in: key } });
      res.status(200).json({ msg: "All Good", hotels });
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
//   if (req.method == "GET") {
//     connectDB();
//     const key = req.query.val;
//     const hotels = await (
//       await Hotel.find({ "facilities.name": { $in: key } })
//     );
//     res.status(200).json({ msg: "All Good", hotels });
//   }
// }