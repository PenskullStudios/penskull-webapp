import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";
import prisma from "@/app/lib/db";

export async function GET(request: NextRequest) {
  const { isSignedIn } = await clerkClient.authenticateRequest({
    request: request,
  });

  if (!isSignedIn) {
    return NextResponse.json(
      { message: "Request not authenticated" },
      { status: 401 }
    );
  }

  try {
    const employee = await prisma.employee.findMany({
      select: {
        name: true,
        workingHours: true,
      },
    });
    return NextResponse.json(employee);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Unable to fetch data from Database" },
      { status: 500 }
    );
  }
}
