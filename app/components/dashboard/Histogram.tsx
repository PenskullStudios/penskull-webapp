import { emply } from "@/app/types/tstypes";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TooltipStyle = {
  background: "rgba(255, 255, 255, 0.4)",
  borderRadius: "10px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(200, 200, 200, 0.4)",
};

export default function Histogram({ data }: { data: emply[] }) {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={730} height={250} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={TooltipStyle} cursor={{ fill: "#f2f2f2" }} />
        <Bar name="Working Hours" dataKey="workingHours" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
