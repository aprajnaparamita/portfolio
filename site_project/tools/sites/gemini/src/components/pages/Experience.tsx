import React from 'react';
import resume from '../../../resume.json';

const Experience: React.FC = () => {
  return (
    <div>
      <h2>Experience & Projects</h2>
      {resume.experience.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.title} at {job.company}</h3>
          <p>{job.start_date} - {job.end_date}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
