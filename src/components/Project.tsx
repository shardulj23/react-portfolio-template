import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>Brand Detection in Twitch Streams</h2>
                <p>Built a computer vision pipeline to detect brand placements in gaming streams using Detectron2.</p>
            </div>
            <div className="project">
                <h2>Product Matching Model for E-commerce</h2>
                <p>Built a TF-IDF and Random Forest model to identify similar product listings across platforms using SQL, Databricks, and MongoDB.</p>
            </div>
            <div className="project">
                <h2>Retail Gaze Analysis with Tobii Lens</h2>
                <p>Analyzed gaze patterns to identify promotional hotspots and improve shelf layout strategies.</p>
            </div>
            <div className="project">
                <h2>X-ray Fracture Detection</h2>
                <p>Improved a medical imaging model by switching to a ResNet backbone and optimizing preprocessing.</p>
            </div>
            <div className="project">
                <h2>Satellite Image Segmentation</h2>
                <p>Enhanced segmentation accuracy for satellite images using a custom U-Net architecture.</p>
            </div>
            <div className="project">
                <h2>ETL Pipeline for Marketing Analytics</h2>
                <p>Created ETL workflows using Airflow to integrate analytics data into Redshift for faster reporting.</p>
            </div>
            <div className="project">
                <h2>Customer Segmentation & CLV Prediction</h2>
                <p>Segmented users and predicted customer lifetime value to support targeted marketing strategies.</p>
            </div>
            <div className="project">
                <h2>E-commerce Scraper & Enrichment</h2>
                <p>Automated data extraction and enrichment pipelines for large-scale e-commerce websites.</p>
            </div>
            <div className="project">
                <h2>GitHub Query Classifier</h2>
                <p>Developed an NLP-based system to classify GitHub issues into relevant technical categories.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;