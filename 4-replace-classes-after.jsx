"use client";

import React, { Suspense, useState } from "react";
import { useRouter } from "next/navigation";

/*
 * Delete all the classes after cursor-pointer in the first top level div below
 * Then try deleting everything before cursor-pointer as well
 */
export default function Courses() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [id, setId] = useState("");
  const [adminSecret, setAdminSecret] = useState("");

  return (
    <div className="cursor-pointer">
      Admin dashboard Create a new course
      <input
        className="text-black"
        type="text"
        placeholder="Course name"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="text-black"
        type="text"
        placeholder="Image url"
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button
        onClick={async () => {
          await fetch("/api/admin/course", {
            body: JSON.stringify({
              id,
              title,
              imageUrl,
              description,
              slug,
              adminSecret,
            }),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
      >
        Create
      </button>
    </div>
  );
}
