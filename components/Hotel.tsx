import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HotelProps {
  data: {
    banner: string;
    gallery: string[];
    name: string;
    description: string;
    facilities: { name: string; img: string }[];
    price: number;
    _id: string;
  };
}

const Hotel: React.FC<HotelProps> = ({ data }) => {
  return (
    <div className="border-2 border-red-500 rounded-lg w-full mb-5 p-5">
      <div className="flex flex-col md:flex-row md:space-x-3">
        <div className="flex-shrink-0">
          <Image
            src={data.banner}
            alt="Hotel Banner"
            width={200}
            height={200}
            className="w-full h-60 object-cover md:w-96 md:h-60 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between md:flex-grow">
          <div className="md:flex md:flex-wrap md:space-x-3">
            {data.gallery.map((ele) => (
              <div key={ele} className="mb-3">
                <Image
                  src={ele}
                  alt="Gallery Image"
                  width={100}
                  height={100}
                  className="w-full h-16 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="md:ml-4 md:mt-0 mt-4">
            <h2 className="font-bold text-2xl md:text-3xl line-clamp-1">
              {data.name}
            </h2>
            <p className="text-justify my-2 md:my-5 text-lg">
              {data.description}
            </p>
            <div className="text-lg">
              <span className="font-bold">Facilities: </span>
              <ul className="flex flex-wrap my-2">
                {data.facilities.map((ele) => (
                  <li key={ele.name} className="mr-3 mb-2 flex items-center">
                    <span>
                      <Image
                        src={ele.img}
                        alt="Facility Image"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full"
                      />
                    </span>
                    <span className="ml-2">{ele.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center mt-3">
              <button className="w-36 h-12 rounded-lg bg-blue-400 text-lg">
                Price: ₹ {data.price}
              </button>
              <Link href={`/hotels/${data._id}`} className="text-lg font-bold text-red-600 ml-5">
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;


// import Image from "next/image";
// import Link from "next/link";

// const Hotel = ({ e }) => {
//   return (
//     <div className="border-2 border-red-500 rounded-lg w-full mb-5 p-5">
//       <div className="flex flex-col md:flex-row md:space-x-3">
//         <div className="flex-shrink-0">
//           <Image
//             src={e?.banner}
//             alt="hotel"
//             width={200}
//             height={200}
//             className="w-full h-60 object-cover md:w-96 md:h-60 rounded-lg"
//           />
//         </div>
//         <div className="flex flex-col justify-between md:flex-grow">
//           <div className="md:flex md:flex-wrap md:space-x-3">
//             {e?.gallery?.map((ele) => (
//               <div key={ele} className="mb-3">
//                 <Image
//                   src={ele}
//                   alt="hotel"
//                   width={100}
//                   height={100}
//                   className="w-full h-16 object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="md:ml-4 md:mt-0 mt-4">
//             <h2 className="font-bold text-2xl md:text-3xl line-clamp-1">
//               {e?.name}
//             </h2>
//             <p className="text-justify my-2 md:my-5 text-lg">
//               {e?.description}
//             </p>
//             <div className="text-lg">
//               <span className="font-bold">Facilities: </span>
//               <ul className="flex flex-wrap my-2">
//                 {e?.facilities?.map((ele) => (
//                   <li key={ele.name} className="mr-3 mb-2 flex items-center">
//                     <span>
//                       <Image
//                         src={ele.img}
//                         width={32}
//                         height={32}
//                         className="w-8 h-8 rounded-full"
//                       />
//                     </span>
//                     <span className="ml-2">{ele.name}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex items-center mt-3">
//               <button className="w-36 h-12 rounded-lg bg-blue-400 text-lg">
//                 Price: &#8377; {e?.price}
//               </button>
//               <Link
//                 href={`/hotels/${e?._id}`}
//                 className="text-lg font-bold text-red-600 ml-5"
//               >
//                 See Details
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hotel;