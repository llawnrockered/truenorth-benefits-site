import React from "react";

function App() {
  return (
    <main className="p-6 space-y-12 bg-white text-gray-900">
      <section className="text-center py-12 bg-gray-50 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-blue-800">TrueNorth Benefits Group</h1>
        <p className="mt-4 text-lg text-gray-700">
          Guiding mid-sized employers to smart, sustainable benefits solutions.
        </p>
      </section>
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          With over 25 years of experience in health and welfare benefits consulting,
          TrueNorth Benefits Group helps mid-sized organizations navigate the complex
          world of employee benefits. Founded by Derek Cornwall, our mission is to
          provide customized, cost-effective strategies that attract talent, ensure
          compliance, and manage costs.
        </p>
      </section>
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Benefits Plan Design & Benchmarking</li>
          <li>Vendor Selection & RFP Management</li>
          <li>Compliance Support (ACA, ERISA, COBRA)</li>
          <li>Employee Communication & Engagement</li>
          <li>Benefits Administration Consulting</li>
          <li>Renewal & Cost Strategy Planning</li>
        </ul>
      </section>
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Let’s talk about how TrueNorth can help you simplify and strengthen your employee benefits.
        </p>
        <div className="mt-4 space-y-2">
          <p>Email Derek directly: <a href="mailto:derek.cornwall@truenorth-benefits.com" className="text-blue-600 underline">derek.cornwall@truenorth-benefits.com</a></p>
          <p>General inquiries: <a href="mailto:info@truenorth-benefits.com" className="text-blue-600 underline">info@truenorth-benefits.com</a></p>
        </div>
      </section>
    </main>
  );
}

export default App;