import React from 'react';
import ResearchItem from '../components/ResearchItem';

const Research = () => {
  const researchItems = [
    {
      topic: "Hype vs. Reality: Integrated Sentiment Analysis and Machine Learning for Pre-Release Movie Revenue Prediction",
      status: "27th International Conference on Computer and Information Technology  (ICCIT 2024)",
      tools: ["Python", "LLM", "Selenium"]
    },

    {
        topic: "Enhancing Deep Learning Models for Alzheimer's Disease Detection Using 3D Magnetic Resonance Imaging",
        status: "Under Review",
        tools: ["Python", "tensorflow", "scikit-learn", "fastsurfer"]
    },

    {
        topic: "Eyes Tell All: Detecting Deepfakes with InceptionResNetV2 and Enhanced Facial Feature Analysis",
        status: "Ongoing",
        tools: ["Python", "scikit-learn", "tensorlow"]
    }
    
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 pb-3" style={{ color: "#243010", borderBottom:"1px solid #243010" }}>Research</h1>
      {researchItems.map((item, index) => (
        <ResearchItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Research;