import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/db";
import UserModel from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await connectDB();

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password required !" });
    }

    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Please Register first !" });
      }

      const passwordMatched = await bcrypt.compare(password, user.password);

      if (passwordMatched) {
        if (!process.env.JWT_SECRET) {
          throw new Error("JWT_SECRET not defined in environment variables");
        }

        const token = jwt.sign({ token: user._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        return res.status(200).json({ msg: "Logged in successfully !", token });
      } else {
        return res.status(400).json({ msg: "Invalid Credentials !" });
      }
    } catch (error) {
      console.error("Error in user authentication:", error);
      return res.status(500).json({ msg: "Server Error" });
    }
  } else {
    return res.status(405).json({ msg: "Method Not Allowed" });
  }
}

// import connectDB from "@/db";
// import User from "@/models/user-model";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     connectDB();
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ msg: "Email and password required !" });
//     }
//     const emailExists = await User.findOne({ email });
//     if (!emailExists) {
//       return res.status(400).json({ msg: "Please Register first !" });
//     }
//     const passwordMatched = await bcrypt.compare(
//       password,
//       emailExists.password
//     );
//     if (passwordMatched) {
//       const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
//         expiresIn: "30d",
//       });
//       return res.status(200).json({ msg: "Logged in successfully !", token });
//     }
//     return res.status(400).json({ msg: "Invalid Credentitials !" });
//   }
// }