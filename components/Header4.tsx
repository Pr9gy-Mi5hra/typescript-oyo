import Image from "next/image";

const Header4: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
      <div className="flex items-center mb-5 md:mb-0">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-5"
        />
        <div className="text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <input
          type="email"
          className="px-6 py-3 rounded-lg mb-3 md:mb-0 mr-0 md:mr-5 w-full md:w-80 outline-none border border-gray-300"
          placeholder="e.g. john@gmail.com"
        />
        <button
          type="submit"
          className="w-full md:w-auto rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer"
        >
          Notify
        </button>
      </div>
    </div>
  );
};

export default Header4;


// "use client"
// import Image from "next/image";

// const Header4 = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
//       <div className="flex items-center mb-5 md:mb-0">
//         <Image
//           src={"/fire.jpg"}
//           alt="fire"
//           width={200}
//           height={200}
//           className="w-32 h-32 rounded-full mr-5"
//         />
//         <div className="text-xl">
//           <p className="font-bold">Get access to exclusive deals</p>
//           <p>Only the best deals reach your inbox</p>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row items-center">
//         <input
//           type="email"
//           className="px-6 py-3 rounded-lg mb-3 md:mb-0 mr-0 md:mr-5 w-full md:w-80 outline-none border border-gray-300"
//           placeholder="e.g. john@gmail.com"
//         />
//         <button
//           type="submit"
//           className="w-full md:w-auto rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer"
//         >
//           Notify
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header4;