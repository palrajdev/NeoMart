// pages/admin/new-product.jsx
import React, { useState } from "react";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function NewProductPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !price) return alert("Title & price required");
    setLoading(true);

    try {
      const uploadedUrls = [];

      for (const file of files) {
        const path = `products/${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
        const { error: uploadErr } = await supabase.storage
          .from("product-images")
          .upload(path, file, { cacheControl: "3600", upsert: false });

        if (uploadErr) throw uploadErr;

        const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product-images/${encodeURIComponent(path)}`;
        uploadedUrls.push(publicUrl);
      }

      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

      const { data, error: insertErr } = await supabase
        .from("products")
        .insert([
          {
            title,
            slug,
            price: parseFloat(price),
            thumbnail: uploadedUrls[0] ?? null,
            images: uploadedUrls,
            description: "",
            stock: 100
          }
        ]);

      if (insertErr) throw insertErr;

      alert("Product created!");
      setTitle("");
      setPrice("");
      setFiles([]);
    } catch (err) {
      console.error(err);
      alert("Error: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Admin — New Product</title>
      </Head>

      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-xl font-bold mb-4">New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border p-2 rounded w-full" />
          <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="border p-2 rounded w-full" />
          <input type="file" multiple accept="image/*" onChange={(e) => setFiles(Array.from(e.target.files))} />
          <div>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-sky-600 text-white rounded">
              {loading ? "Uploading..." : "Create Product"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
