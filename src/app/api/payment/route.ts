import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_mockkey",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "mock_secret",
});

export async function POST(req: Request) {
  try {
    const { amount, currency = "INR", receipt = "receipt_01" } = await req.json();

    const options = {
      amount: amount * 100, // Razorpay works in the smallest currency sub-unit
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({ success: true, order }, { status: 200 });
  } catch (error) {
    console.error("Razorpay Error:", error);
    // Development local fallback
    return NextResponse.json({ 
       success: false, 
       mockOrder: { id: "order_mock123", amount: 500000 },
       message: "Payment initialized (Mock)" 
    }, { status: 200 });
  }
}
