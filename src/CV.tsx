import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import cvPdf from "./pdfs/cv.pdf";

function CV() {
  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={cvPdf} />
      </Worker>
    </div>
  );
}

export default CV;
