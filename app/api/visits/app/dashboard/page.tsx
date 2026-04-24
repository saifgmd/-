"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/visits").then(res => res.json()).then(setData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">لوحة التحكم</h1>

      <table className="w-full bg-white shadow rounded-xl">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الموقع</th>
            <th>التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v:any)=>(
            <tr key={v.id}>
              <td>{v.fullName}</td>
              <td>{v.location}</td>
              <td>{new Date(v.visitDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
