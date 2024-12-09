import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

const Experience = () => {
  const experiences = [
    {
      jobTitle: "Undergraduate Teaching Assistant",
      company: "United International University",
      startDate: "November 2023",
      endDate: "Present",
      description: "Working as a teaching assistant for undergraduate computer science courses."
    },
    {
        jobTitle: "Front-end Intern",
        company: "Pondit",
        startDate: "March 2022",
        endDate: "May 2022",
        description: "Worked as a front-end intern at Pondit, a software farm."
      },
    // Add more experiences as needed
  ];

  return (
    <div className="container py-5 h-100 d-flex flex-column justify-content-center">
      <h1 className="text-center mb-5 pb-3" style={{ color: "#243010", borderBottom:"1px solid #243010" }}>Experience</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;