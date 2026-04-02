import { connectDB } from "../../../lib/mongodb";
import Subscriber from "../../../models/Subscriber";

export async function POST(req) {
  try {
    await connectDB();

    const { email } = await req.json();

    // Check if email already exists
    const existing = await Subscriber.findOne({ email });

    if (existing) {
      return Response.json(
        { message: "Already subscribed" },
        { status: 409 }
      );
    }

    // Save new subscriber
    await Subscriber.create({ email });

    return Response.json(
      { message: "Subscribed successfully" },
      { status: 201 }
    );
  } catch (error) {
  console.error("🔥 FULL ERROR:", error); // 👈 VERY IMPORTANT
  return Response.json(
    { message: error.message, stack: error.stack },
    { status: 500 }
  );
    }
}