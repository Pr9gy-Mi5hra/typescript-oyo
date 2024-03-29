import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

interface RazorpayData {
  id: string;
  currency: string;
  amount: number;
}

const Payment = () => {
  const router = useRouter();
  
  const makePayment = async () => {
    const val = {
      id: router.query?.id,
    };

    try {
      const { data } = await axios.post<RazorpayData>(`/api/razorpay`, val);

      const options = {
        key: process.env.RAZORPAY_KEY,
        name: "Pragya",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank You !",
        handler: function (response: any) {}, // Define your handler function properly
        prefill: {
          name: "Pragya",
          email: "pragya@gmail.com",
          contact: 987654321,
        },
      };

      const paymentObj = new (window as any).Razorpay(options); // Type assertion
      paymentObj.open();
    } catch (error) {
      console.error("Error making payment:", error);
      // Handle error as per your requirement
    }
  };

  useEffect(() => {
    makePayment();
  }, []);

  return null; // Since you're loading the script in the head, you don't need to return anything from here.
};

export default Payment;

// Load the script in the head of your page
export function getStaticProps() {
  return {
    props: {
      // This is required to trigger a re-render when the script is loaded
      // You can pass any data you need to use in your component
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // or 'blocking' if you prefer to load the script before rendering the page
  };
}




// import axios from "axios";
// import Script from "next/script";
// import { useEffect } from "react";
// import { useRouter } from "next/router";

// const Payment = () => {
//   const router = useRouter();
  
//   const makePayment = async () => {
//     const val = {
//       id: router.query?.id,
//     };
//     const { data } = await axios.post(`/api/razorpay`, val);

//     const options = {
//       key: process.env.RAZORPAY_KEY,
//       name: "Pragya",
//       currency: data.currency,
//       amount: data.amount,
//       order_id: data.id,
//       description: "Thank You !",
//       handler: function (response) {},
//       prefill: {
//         name: "Pragya",
//         email: "pragya@gmail.com",
//         contact: 987654321,
//       },
//     };

//     const paymentObj = new window.Razorpay(options);
//     paymentObj.open();
//   };

//   useEffect(() => {
//     makePayment();
//   }, []);

//   return (
//     <>
//       <Script src="http://checkout.razorpay.com/v1/checkout.js" />
//     </>
//   );
// };

// export default Payment;