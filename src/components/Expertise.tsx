import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "PyTorch",
  "OpenCV",
  "Matplotlib",
  "Seaborn",
  "SQL",
  "Flask"
];

const labelsSecond = [
  "Airflow",
  "Docker",
  "AWS",
  "Git",
  "Linux",
  "MongoDB",
  "Databricks",
  "PostgreSQL"
];

const labelsThird = [
  "OpenAI",
  "LangChain",
  "Hugging Face",
  "Qdrant",
  "LlamaIndex",
  "Streamlit",
  "FastAPI"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>ML Engineering & Scalable Workflows</h3>
                    <p>I develop machine learning solutions across domains including natural language processing, computer vision, and structured data. My work spans building classification models, segmentation pipelines, and recommendation systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>ML Engineering & Scalable Workflows</h3>
                    <p>I design end-to-end pipelines for model training, evaluation, and deployment using modern tools and cloud platforms. I focus on clean, modular workflows for production-grade AI applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I've explored generative AI through personal projects, experimenting with LLM frameworks, vector databases, and tools like OpenAI, Hugging Face, and LangChain to build learning-focused applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;