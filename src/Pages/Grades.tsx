import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "../CSS/Grades.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import cvPdf from "../pdfs/pb.pdf";
import GradeDiagram from "../Components/GradeDiagram";

function GradesPage() {
  return (
    <div className="Grade_Container">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={cvPdf} />
      </Worker>
      <h2>Visualisations of grades:</h2>
      <p>
        Here you can see visualisations of my grades from my bachelor's degree.
      </p>
      <GradeDiagram />
    </div>
  );
}

export default GradesPage;
