import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "enquiries.json");

// Helper to ensure data directory exists and read file
async function readEnquiries() {
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (readError: any) {
      if (readError.code === "ENOENT") {
        await fs.writeFile(filePath, JSON.stringify([], null, 2), "utf-8");
        return [];
      }
      throw readError;
    }
  } catch (error) {
    console.error("Error reading enquiries file:", error);
    return [];
  }
}

// Helper to write file
async function writeEnquiries(data: any) {
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing enquiries file:", error);
  }
}

export async function GET() {
  const enquiries = await readEnquiries();
  return NextResponse.json(enquiries);
}

export async function POST(req: Request) {
  try {
    const { name, email, interest, message } = await req.json();
    if (!name || !email || !interest || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const enquiries = await readEnquiries();
    const newEnquiry = {
      id: Date.now().toString(),
      name,
      email,
      interest,
      message,
      date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    enquiries.unshift(newEnquiry); // Add new enquiry to the top of list
    await writeEnquiries(enquiries);

    return NextResponse.json({ success: true, enquiry: newEnquiry }, { status: 201 });
  } catch (error) {
    console.error("Error in POST enquiries:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const clearAll = searchParams.get("clearAll");

    if (clearAll === "true") {
      await writeEnquiries([]);
      return NextResponse.json({ success: true, message: "All enquiries cleared" });
    }

    if (id) {
      const enquiries = await readEnquiries();
      const filtered = enquiries.filter((e: any) => e.id !== id);
      await writeEnquiries(filtered);
      return NextResponse.json({ success: true, message: `Enquiry with id ${id} deleted` });
    }

    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  } catch (error) {
    console.error("Error in DELETE enquiries:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
