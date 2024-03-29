import connectDB from "@/db";
import Razorpay from "razorpay";
import shortid from "shortid";
import { Request, Response } from "express";
import Hotel from "@/models/hotel-model";

interface RazorpayOrderResult {
  id: string;
  currency: string;
  amount: number;
}

export default async function handler(req: Request, res: Response) {
  if (req.method === "POST") {
    connectDB();
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY!,
      key_secret: process.env.RAZORPAY_SECRET!,
    });

    try {
      const hotel = await Hotel.findById(req.body.id);
      if (hotel) {
        if (typeof hotel.price === 'number') {
          const amount: number = hotel.price;
          const options = {
            amount: (amount * 100).toString(),
            currency: "INR",
            receipt: shortid.generate(),
            payment_capture: 1,
          };

          const result: RazorpayOrderResult = await razorpay.orders.create(options);
          return res.status(201).json({
            id: result.id,
            currency: result.currency,
            amount: result.amount,
          });
        } else {
          return res.status(400).json({ message: "Invalid price for hotel" });
        }
      } else {
        return res.status(404).json({ message: "Hotel not found" });
      }
    } catch (err) {
      return res.status(400).json(err);
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}





// import connectDB from "@/db";
// import Razorpay from "razorpay";
// import shortid from "shortid";
// import Hotel from "@/models/hotel-model";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     connectDB();
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY,
//       key_secret: process.env.RAZORPAY_SECRET,
//     });

//     const hotel = await Hotel.findById(req.body.id);
//     if (hotel) {
//       const amount = hotel.price;
//       const options = {
//         amount: (amount * 100).toString(),
//         currency: "INR",
//         receipt: shortid.generate(),
//         payment_capture: 1,
//       };

//       try {
//         const result = await razorpay.orders.create(options);
//          return res.status(201).json({
//            id: result.id,
//            currency: result.currency,
//            amount: result.amount,
//          });
//       } catch (err) {
//          res.status(400).json(err);
//       }
//     }
//   }
// }