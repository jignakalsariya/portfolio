"use client";

import React from "react";
import SubNavbar from "@/components/developer/SubNavbar"; // Aapka SubNavbar path
import ContactForm from "@/components/developer/ContactForm"; // Aapka ContactForm path

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <SubNavbar/>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="space-y-12">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}