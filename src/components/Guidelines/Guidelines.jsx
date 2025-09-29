// TeacherGuide.js
// JavaScript version of Teacher Guide page for Disaster Preparedness App

import React, { useState } from "react";
import pdf from "../../assets/Teachers_Guidelines_Disaster_App.pdf";

export default function TeacherGuide() {
  const [expanded, setExpanded] = useState({});

  const toggle = (key) => {
    setExpanded((s) => ({ ...s, [key]: !s[key] }));
  };

  const sections = [
    {
      id: "getting-started",
      title: "1. Getting Started",
      content: (
        <div className="space-y-2">
          <p>Use the login credentials provided by your school admin to access the app.</p>
          <p>Once logged in, select <strong>“Teacher Dashboard”</strong> to view your resources.</p>
          <p>Ensure your profile information is updated.</p>
        </div>
      ),
    },
    {
      id: "dashboard",
      title: "2. Understanding the Dashboard",
      content: (
        <div className="space-y-2">
          <p>Your dashboard gives you access to:</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li><strong>Learning Modules Overview</strong> — Preview the student content (earthquake, flood, fire, etc.).</li>
            <li><strong>Virtual Drills</strong> — Guidelines to conduct online/offline practice drills.</li>
            <li><strong>Student Reports</strong> — Track student participation, badges earned, and quiz scores.</li>
            <li><strong>Help & Support</strong> — Access FAQs and troubleshooting guides.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "role",
      title: "3. Your Role as a Teacher",
      content: (
        <div className="space-y-2">
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li><strong>Introduce the App:</strong> Explain to students the importance of disaster preparedness and how to use the app.</li>
            <li><strong>Facilitate Learning:</strong> Encourage students to complete modules and participate in games.</li>
            <li><strong>Monitor Engagement:</strong> Use your dashboard to see which students are active and which need motivation.</li>
            <li><strong>Reinforce Knowledge:</strong> Discuss key learnings from the modules during classroom sessions.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "drills",
      title: "4. Conducting Drills",
      content: (
        <div className="space-y-2">
          <p><strong>Before the Drill:</strong> Brief students about the drill objective (e.g., earthquake evacuation).</p>
          <p><strong>During the Drill:</strong> Supervise and ensure students follow safety steps shown in the app.</p>
          <p><strong>After the Drill:</strong> Collect student feedback and update the report section in your dashboard.</p>
        </div>
      ),
    },
    {
      id: "gamified",
      title: "5. Gamified Learning",
      content: (
        <div className="space-y-2">
          <p>Inform students about the badge system (e.g., Flood Ready, Fire Smart).</p>
          <p>Motivate them to earn badges by completing modules and quizzes.</p>
          <p>Recognize top performers in class to encourage healthy competition.</p>
        </div>
      ),
    },
    {
      id: "communication",
      title: "6. Communication & Feedback",
      content: (
        <div className="space-y-2">
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>Share progress updates with your school admin regularly.</li>
            <li>Report any technical issues via the Support tab.</li>
            <li>Provide feedback on the modules or drills to help us improve the app.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "best-practices",
      title: "7. Best Practices",
      content: (
        <div className="space-y-2">
          <p>Dedicate at least <strong>15–20 minutes weekly</strong> for disaster education using the app.</p>
          <p>Encourage students to share their learning with peers and families.</p>
          <p>Foster a positive and engaging environment — make preparedness fun as well as educational.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Teacher Guide — Disaster Preparedness App</h1>
          <p className="text-gray-600 mt-2">Practical steps and best practices to run the app smoothly in class.</p>
        </header>

        <div className="grid gap-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
            <div>
              <h2 className="text-lg font-medium">Quick Actions</h2>
              <p className="text-sm text-gray-500">Common tasks for teachers while using the dashboard.</p>
            </div>
            <div className="flex gap-2">
              <button
                className="px-3 py-2 bg-indigo-600 text-white rounded-xl text-sm hover:bg-indigo-700"
                onClick={() => alert("Open Teacher Dashboard (placeholder)")}
              >
                Open Dashboard
              </button>
              <button
                className="px-3 py-2 border rounded-xl text-sm hover:bg-gray-100"
                onClick={() => alert("Open Support (placeholder)")}
              >
                Support
              </button>
            </div>
          </div>

          <section className="space-y-4">
            {sections.map((s) => (
              <article key={s.id} className="bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">Tap to expand for details.</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggle(s.id)}
                      className="px-3 py-1 rounded-lg border text-sm"
                    >
                      {expanded[s.id] ? "Collapse" : "Expand"}
                    </button>
                  </div>
                </div>
                {expanded[s.id] && (
                  <div className="mt-4 text-gray-700">{s.content}</div>
                )}
              </article>
            ))}
          </section>

          <section className="bg-white p-4 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold">Drill Checklist (Printable)</h3>
            <p className="text-sm text-gray-500 mt-1">Use this quick checklist when you run a drill.</p>
            <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Brief students on objective",
                "Demonstrate steps using app",
                "Supervise student actions",
                "Record participation in report",
                "Collect feedback",
                "Share results with admin",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
                onClick={() => alert("Checklist printed (placeholder)")}
              >
                Print Checklist
              </button>
              <button
  className="px-4 py-2 border rounded-lg"
  onClick={() => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Teachers_Guidelines_Disaster_App.pdf";
    link.click();
  }}
>
  Download Guide
</button>

            </div>
          </section>

          <section className="bg-white p-4 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold">Classroom Ideas & Activities</h3>
            <div className="mt-3 grid gap-2">
              <ActivityCard
                title="Badge Rally"
                description="Create a month-long badge-rally where students earn stickers for every module completed. Display a leaderboard."
              />
              <ActivityCard
                title="Family Preparedness Homework"
                description="Ask students to discuss the app's checklist with family, then bring back one practical tip they learned."
              />
              <ActivityCard
                title="Mini Quiz Tournament"
                description="Run quick 10-minute quizzes in class. Award classroom points that convert to small privileges."
              />
            </div>
          </section>

          <footer className="text-center text-sm text-gray-500 py-6">© {new Date().getFullYear()} Disaster Preparedness App</footer>
        </div>
      </div>
    </div>
  );
}

function ActivityCard({ title, description }) {
  return (
    <div className="border rounded-xl p-3">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
