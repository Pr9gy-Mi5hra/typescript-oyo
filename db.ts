import mongoose, { Connection } from "mongoose";

const URI: string = process.env.MONGO_URI || "";

let cachedDB: Connection | null = null;

const connectDB = async (): Promise<Connection> => {
  if (cachedDB) {
    return cachedDB;
  } else {
    const newDB = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions); // Casting to mongoose.ConnectOptions to avoid TypeScript error
    cachedDB = newDB.connection;
    console.log('DB Connected..');
    return newDB.connection;
  }
};

export default connectDB;

// import mongoose from "mongoose";

// const URI =process.env.MONGO_URI;

// const connectDB = async () => {
//   let cachedDB = null;

//   if (cachedDB) {
//     return cachedDB;
//   }else{
//      const newDB = await mongoose.connect(URI, {
//        useNewUrlParser: true,
//        useUnifiedTopology: true,
//      });
//     //  cachedDB = newDB;
//     //  return newDB;
//   }
//  console.log('DB Connected..');
// };

// export default connectDB;