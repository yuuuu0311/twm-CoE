import { NextResponse } from "next/server";
import setDelay from "@/app/_utils/setDelay";

const POST = async (req) => {
    const { delay } = await req.json();

    const data = Array(10).fill({ data: "test" });

    await setDelay(delay);

    return NextResponse.json({ data });
};

export { POST };
