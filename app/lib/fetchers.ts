import axios from "axios";
import { emply } from "@/app/types/tstypes";

export async function fetchWorkingHours(
  token: string | null
): Promise<emply[]> {
  try {
    const req = await axios.get("api/employee-workinghours", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: emply[] = req.data;
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return [];
  }
}
