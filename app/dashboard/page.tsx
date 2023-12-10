"use client";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { fetchWorkingHours } from "@/app/lib/fetchers";
import { emply } from "@/app/types/tstypes";
import Histogram from "@/app/components/dashboard/Histogram";

export default function Page() {
  const [data, setData] = useState<emply[]>([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      const reqData = await fetchWorkingHours(token);
      setData(reqData);
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[30rem] h-[30rem]">
        <Histogram data={data} />
      </div>
    </div>
  );
}
