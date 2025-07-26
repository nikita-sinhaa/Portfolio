import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-white space-y-20">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">Beyond Firmware</h1>
        <h2 className="text-2xl font-semibold mt-2">Who is Nikita?</h2>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className="w-64 h-64 relative rounded-xl shadow-lg overflow-hidden">
            <Image src="/nikita/nikita-1.jpeg" alt="Nikita portrait" layout="fill" objectFit="cover" />
          </div>
          <p className="text-lg max-w-xl text-left">
            Embedded engineer, sensor enthusiast, and a proud process control fanatic. Storyteller in code and beyond. I build real-time systems that think fast and run clean.
            <br /><br />
            Outside the lab, you’ll find me <span className="text-blue-400">writing</span>, <span className="text-blue-400">exploring new places</span>,
            <span className="text-blue-400"> cooking something spicy</span>, or <span className="text-blue-400">clicking photographs of the most random building around.</span>
          </p>
        </div>
      </div>

      {/* Journey */}
      <div>
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-10">My Firmware Journey 💡</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-blue-500 rounded-lg p-6 backdrop-blur-lg bg-white/5">
            <h4 className="text-xl font-bold text-blue-400 mb-2">The Spark</h4>
            <p>
              Surrounded by mechanical and electrical engineers since childhood, I was sketching circuits and taking apart toys before I learned algebra. By middle school, I knew one thing: I’d become an <span className="text-blue-400">engineer</span>.
            </p>
          </div>
          <div className="border border-blue-500 rounded-lg p-6 backdrop-blur-lg bg-white/5">
            <h4 className="text-xl font-bold text-blue-400 mb-2">Booting into Reality</h4>
            <p>
              My work at <span className="font-bold">Kirloskar</span> and <span className="font-bold">Kohler</span> brought me face to face with the real challenges of automation. That’s when I discovered the power of firmware in the real world.
            </p>
          </div>
          <div className="border border-blue-500 rounded-lg p-6 backdrop-blur-lg bg-white/5">
            <h4 className="text-xl font-bold text-blue-400 mb-2">Where it All Intersected</h4>
            <p>
              At Manipal Institute of Technology, I chose Instrumentation & Control Engineering. A perfect blend of mechanical logic and electrical depth. This is where I fell in love with <span className="text-blue-400">process control, PLCs, and signal processing.</span>
            </p>
          </div>
          <div className="border border-blue-500 rounded-lg p-6 backdrop-blur-lg bg-white/5">
            <h4 className="text-xl font-bold text-blue-400 mb-2">Talking to Hardware</h4>
            <p>
              Today, I build <span className="text-blue-400">real-time systems</span> that listen, think, and respond. I write code that speaks directly to machines with <span className="text-blue-400">precision, intent, and zero fluff.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-left max-w-xl">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">My Goals 🚀</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>💼 Land my dream job where I could explore my knowledge to the fullest.</li>
            <li>🧘 Stay grounded and growing: physically stronger, mentally sharper.</li>
            <li>🛠 Build a real-time system that genuinely helps people.</li>
            <li>🤝 Be part of impactful work at the intersection of humanity and technology.</li>
            <li>🌍 Travel the world’s national parks and collect stories from every corner.</li>
            <li>🏡 Build my parents’ dream home nestled in the quiet of the hills.</li>
          </ul>
        </div>
        <div className="w-72 h-72 relative rounded-xl shadow-lg overflow-hidden">
          <Image src="/nikita/nikita-2.jpg" alt="Nikita with dog" layout="fill" objectFit="cover" />
        </div>
      </div>

      {/* Photography */}
      <div>
        <h3 className="text-3xl font-semibold text-blue-500 mb-4 text-center">Things That Attract Me 💚</h3>
        <p className="text-center max-w-2xl mx-auto text-md text-gray-300 mb-6 italic">
          Photography is how I see things just quietly, carefully, and sometimes differently 👀📷. It’s not about taking photos. It’s about noticing what’s worth remembering ✨🖼️
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {[3, 4, 5, 6].map((num, i) => (
            <div key={i} className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
              <Image src={`/nikita/nikita-${num}.jpeg`} alt={`Captured moment ${i + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
