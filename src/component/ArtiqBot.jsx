import { useState } from "react";

export default function ArtiqBot() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    space: "",
    name: "",
    phone: ""
  });

  // STEP 1: Select Space
  const selectSpace = (space) => {
    setData(prev => ({ ...prev, space }));
    setStep(2);
  };

  // STEP 2: Submit form
  const submitForm = async () => {
    if (!data.name || data.phone.length !== 10) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

    await fetch("https://script.google.com/macros/s/AKfycbzs3Cwip0iyVIQGcmJi_clUht5h_Os9FPJfTWmfGOMKScgHIUa5bqsJXCH4Ry5H_MOs/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setStep(3);
  };

  return (
    <div className="space-y-4 text-sm">

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <p className="font-medium">
            Hi 👋 I’m <strong>Artiq Assistant</strong>  
            <br />Where are you looking to add premium wall décor?
          </p>

          {["Home", "Office", "Workspace", "Others"].map(item => (
            <button
              key={item}
              onClick={() => selectSpace(item)}
              className="w-full py-2 rounded-xl border 
              hover:bg-black hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <p className="font-medium">
            Great choice ✨  
            Share your details so we can assist you better.
          </p>

          <input
            placeholder="Full Name"
            className="w-full border rounded-lg p-2"
            onChange={e => setData({ ...data, name: e.target.value })}
          />

          <input
  type="tel"
  placeholder="Mobile Number"
  className="w-full border rounded-lg p-2"
  value={data.phone}
  maxLength={10}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); // digits only
    if (value.length <= 10) {
      setData({ ...data, phone: value });
    }
  }}
/>


          <button
            onClick={submitForm}
            className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition"
          >
            Continue →
          </button>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="text-center space-y-2">
          <p className="font-semibold text-lg">
            Thank you for reaching Artiq ✨
          </p>
          <p className="text-gray-600">
            Our team will contact you shortly with personalized décor ideas.
          </p>
          <p className="italic text-sm">
            Because your walls deserve more than ordinary.
          </p>
        </div>
      )}

    </div>
  );
}