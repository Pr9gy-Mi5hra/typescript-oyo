import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/db";
import HotelModel from "@/models/hotel-model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  // if (req.method === "POST") {
  //   const newHotel = new Hotel(req.body);
  //   const result = await newHotel.save();
  //   return res.status(201).json({ msg: "Hotel added !", result });
  // }

  if (req.method === "GET") {
    try {
      const city = req.query.city as string;
      if (city) {
        const hotels = await HotelModel.find({ location: city });
        return res.status(200).json({ msg: "Good", hotels });
      } else {
        const allHotels = await HotelModel.find({});
        return res.status(200).json({ msg: "Good", allHotels });
      }
    } catch (error) {
      return res.status(500).json({ msg: "Server Error" });
    }
  } else {
    return res.status(405).json({ msg: "Method Not Allowed" });
  }
}


// import connectDB from "@/db";
// import Hotel from "@/models/hotel-model";

// export default async function handler(req, res) {
//   connectDB();
//   //   if (req.method === "POST") {
//   //     const newHotel = new Hotel(req.body);
//   //     const result = await newHotel.save();
//   //     res.status(201).json({ msg: "Hotel added !", result });
//   //   }

//   if (req.method === "GET") {
//     const hotels = await Hotel.find({ location: req.query.city });
//     if (hotels.length > 0) {
//       return res.status(200).json({ msg: "Good", hotels });
//     }
//     const allhotels = await Hotel.find({});
//     return res.status(200).json({ msg: "Good", allhotels });
//   }
// }