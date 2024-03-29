import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/db";
import UserModel from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await connectDB();

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All Fields are Mandatory !" });
    }

    try {
      const emailExists = await UserModel.findOne({ email });

      if (emailExists) {
        return res.status(400).json({ msg: "User already Registered !" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new UserModel({
        name,
        email,
        password: hashedPassword,
      });

      const result = await newUser.save();

      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not defined in environment variables");
      }

      const token = jwt.sign({ token: result._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      return res.status(201).json({ msg: "Registered Successfully !", token });
    } catch (error) {
      console.error("Error in user registration:", error);
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
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ msg: "All Fields are Mandatory !" });
//     }
//     const emailExists = await User.findOne({ email });
//     if (emailExists) {
//       return res.status(400).json({ msg: "User already Registered !" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     const result = await newUser.save();
//     const token = jwt.sign({ token: result._id }, process.env.JWT_SECRET, {
//       expiresIn: "30d",
//     });
//     return res
//       .status(201)
//       .json({ msg: "Registered Succesfully !", token });
//   }
// }