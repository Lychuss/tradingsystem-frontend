"use client";
import { useEffect, useState } from "react";

export default function Text() {
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('studentId') ? localStorage.getItem('studentId') : null;
      console.log(stored);
      setStudentId(stored);
    } catch (err) {
      console.error("Error reading studentId:", err);
    }
  }, []);

  return (
    <span className="text-white font-semibold mr-2">
      {studentId}
    </span>
  );
}
