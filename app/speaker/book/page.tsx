import SubNavbar from "@/components/speaker/SubNavbar";
import BookingForm from "@/components/speaker/BookingForm";

export default function BookingPage() {
  return (
    <main className="bg-black text-white min-h-screen font-jakarta">
      <SubNavbar />
      
      <div className="max-w-4xl mx-auto px-6 pb-10 pt-10">
        
        {/* Form Component */}
        <BookingForm />

        {/* Trust Note */}
        <p className="mt-12 text-center text-gray-400 text-[12px] uppercase tracking-widest leading-relaxed">
          Your data is secure and will only be used for communication 
          regarding your booking inquiry.
        </p>
      </div>

    </main>
  );
}