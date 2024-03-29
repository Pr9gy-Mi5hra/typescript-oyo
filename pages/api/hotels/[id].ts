import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/db";
import HotelModel, { Hotel } from "@/models/hotel-model";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        await connectDB();
        try {
            if (req.query.id) {
                const hotel: Hotel | null = await HotelModel.findById(req.query.id as string);
                if (hotel) {
                    res.status(200).json({ msg: "Good", hotel });
                } else {
                    res.status(404).json({ msg: "Hotel not found" });
                }
            } else {
                res.status(400).json({ msg: "Missing ID parameter" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Server Error" });
        }
    } else {
        res.status(405).json({ msg: "Method Not Allowed" });
    }
}


// import connectDB from "@/db";
// import Hotel from "@/models/hotel-model";

// export default async function handler(req,res){
//     if(req.method==="GET"){
//         connectDB();
//         if(req.query.id){
//             const hotel = await Hotel.findById(req.query.id);
//             res.status(200).json({msg:"Good" , hotel});
//         }
//     }
// }