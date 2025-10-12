"use client";
import { useEffect, useState } from "react";

export default function Text() {
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
      setStudentId(stored.student_id);
      console.log(studentId);
    } catch (err) {
      console.error("Error reading studentId:", err);
    }
  }, []);

  return (
    <span className="text-white font-semibold">
      {studentId}
    </span>
  );
}
