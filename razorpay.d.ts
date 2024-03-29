declare module 'razorpay' {
    interface RazorpayOrderResult {
        id: string;
        currency: string;
        amount: number;
        // Add other properties as per your requirements
    }

    interface RazorpayOrders {
        create(options: any): Promise<RazorpayOrderResult>;
        // Add other methods as per your requirements
    }

    interface RazorpayOptions {
        key_id: string;
        key_secret: string;
        // Add other options as per your requirements
    }

    interface Razorpay {
        orders: RazorpayOrders;
        // Add other properties and methods as per your requirements
    }

    const Razorpay: {
        new(options: RazorpayOptions): Razorpay;
    };

    export { Razorpay, RazorpayOrderResult, RazorpayOrders, RazorpayOptions };
}
