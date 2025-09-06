// import React from "react";
// import { Book } from "lucide-react";
// import "./Resume.css";

// const ResumeSection = ({ title, items }) => {
//     return (
//         <div className="resume-section">
//             <div className="resume-header">
//                 <div className="resume-icon">
//                     <Book size={22} />
//                 </div>
//                 <h2 className="resume-title">{title}</h2>
//             </div>

//             <div className="resume-timeline">
//                 {items.map((item, i) => (
//                     <div key={i} className="resume-item">
//                         <div className="resume-dot"></div>
//                         <h3 className="resume-institute">{item.institute}</h3>
//                         <p className="resume-degree">{item.degree}</p>
//                         <p className="resume-period">{item.period}</p>
//                         {item.company && (
//                             <>
//                                 <p className="resume-location">{item.location}</p>
//                                 <ul className="resume-list">
//                                     {item.responsibilities.map((res, idx) => (
//                                         <li key={idx}>{res}</li>
//                                     ))}
//                                 </ul>
//                             </>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default function Resume() {
//     const education = [
//         {
//             institute: "Nihareeka College Of Management And Information Technology",
//             degree:
//                 "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
//             period: "2017 — 2021",
//         },
//         {
//             institute: "Greenland International College",
//             degree: "+2 Science",
//             period: "2015 — 2017",
//         },
//     ];

//     const experience = [
//         {
//             institute: "Mid-Level Flutter Developer",
//             company: "Tokma Technologies",
//             location: "Kathmandu, Nepal",
//             degree: "Tokma Technologies",
//             period: "Aug, 2024 — Feb, 2025 • 7 mos",
//             responsibilities: [
//                 "Developed new features and implemented UI designs into code using Flutter.",
//                 "Collaborated with team to improve app performance.",
//             ],
//         },
//     ];

//     return (
//         <div className="resume-body">
//             <div className="resume-container">
//                 <h1 className="resume-main-title">Resume</h1>
//                 <ResumeSection title="Education" items={education} />
//                 <ResumeSection title="Experience" items={experience} />
//             </div>
//         </div>
//     );
// }


import React from "react";
import { Book, Briefcase, Star, Heart } from "lucide-react";
import "./Resume.css";

const ResumeSection = ({ icon: Icon, title, items, type }) => {
  return (
    <div className="resume-card">
      <div className="resume-header">
        <div className="resume-icon">
          <Icon size={22} />
        </div>
        <h2 className="resume-title">{title}</h2>
      </div>

      {type === "timeline" ? (
        <div className="resume-timeline">
          {items.map((item, i) => (
            <div key={i} className="resume-item">
              <div className="resume-dot"></div>
              <h3 className="resume-institute">{item.institute}</h3>
              <p className="resume-degree">{item.degree}</p>
              <p className="resume-period">{item.period}</p>
              {item.company && (
                <>
                  <p className="resume-location">{item.location}</p>
                  <ul className="resume-list">
                    {item.responsibilities.map((res, idx) => (
                      <li key={idx}>{res}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="resume-list-grid">
          {items.map((item, i) => (
            <div key={i} className="resume-skill">{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Resume() {
  const education = [
    {
      institute: "Maharshi Dayanand University",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2023 — 2026",
    },
    {
      institute: "Jamia Millia Islamia",
      degree: "+2 Science",
      period: "2020-2022",
    },
  ];

  const experience = [
    {
      institute: "AI Intern",
      company: "Otomashen",
      location: "Noida, India",
      degree: "Otomashen",
      period: "Feb, 2025 — April, 2025",
      responsibilities: [
        "Built various AI models and integrated them into applications.",
        "Worked on AI projects involving machine learning and data analysis.",
      ],
    },
  ];

  const skills = ["C/C++", "Python", "Web Development", "SQL", "Artificial Intelligence", "Machine Learning"];
  const hobbies = ["Painting", "Sketching", "Traveling", "Photography"];

  return (
    <div className="resume-body">
      <div className="resume-container">
        <h1 className="resume-main-title">Resume</h1>

        <ResumeSection icon={Book} title="Education" items={education} type="timeline" />
        <ResumeSection icon={Briefcase} title="Experience" items={experience} type="timeline" />
        <ResumeSection icon={Star} title="Skills" items={skills} type="list" />
        <ResumeSection icon={Heart} title="Hobbies" items={hobbies} type="list" />
      </div>
    </div>
  );
}
