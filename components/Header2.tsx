import React from 'react';

const Header2: React.FC = () => {
  const List: { name: string }[] = [
    {
      name: "Bangalore",
    },
    {
      name: "Kolkata",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Hyderabad",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap px-5 md:px-10 py-3 bg-gray-100 justify-between">
        {List.map((e) => {
          return (
            <span key={e.name} className="block mr-2 mb-2">
              {e.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Header2;


// const Header2 = () => {
//   const List = [
//     {
//       name: "Banglore",
//     },
//     {
//       name: "Culcutta",
//     },
//     {
//       name: "Mumbai",
//     },
//     {
//       name: "Delhi",
//     },
//     {
//       name: "Hyderabad",
//     },
//   ];
//   return (
//     <div>
//       <div className="flex flex-wrap px-5 md:px-10 py-3 bg-gray-100 justify-between">
//         {List.map((e) => {
//           return (
//             <span key={e.name} className="block mr-2 mb-2">
//               {e.name}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Header2;