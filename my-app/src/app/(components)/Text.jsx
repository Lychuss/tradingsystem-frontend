"use client";
import { useEffect, useState } from "react";

export default function Text() {
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('studentId') ? JSON.parse(localStorage.getItem('studentId')) : null;
      setStudentId(stored);
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
