import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const GradeDataToCourse = [
  { course: "SW-DMA1", Grade: 7 },
  { course: "SW-SDJ1", Grade: 12 },
  { course: "SW-WEB1", Grade: 7 },
  { course: "SW-SEP1", Grade: 12 },
  { course: "SW-SDJ2", Grade: 12 },
  { course: "SW-SEP2", Grade: 12 },
  { course: "SW-SWE1", Grade: 12 },
  { course: "SW-DBS1", Grade: 4 },
  { course: "SW-SDJ3", Grade: 12 },
  { course: "SW-NES1", Grade: 2 },
  { course: "SW-SEP3", Grade: 7 },
  { course: "SW-CAO1", Grade: 4 },
  { course: "SW-DNP1", Grade: 10 },
];
function GradeDiagram() {
  return (
    <div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={GradeDataToCourse}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="course" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Grade" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h2>Average grade: {AverageGrade()}</h2>
    </div>
  );
}

function AverageGrade() {
  let sum = 0;
  for (let i = 0; i < GradeDataToCourse.length; i++) {
    sum += GradeDataToCourse[i].Grade;
  }
  return sum / GradeDataToCourse.length;
}

export default GradeDiagram;
