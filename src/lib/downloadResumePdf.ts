export async function downloadResumePdf(element: HTMLElement, filename = "Sam-Shahi-Resume.pdf") {
  const { jsPDF } = await import("jspdf");

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  await doc.html(element, {
    callback: (pdf) => {
      pdf.save(filename);
    },
    x: 8,
    y: 8,
    width: 194,
    windowWidth: 1200,
    html2canvas: {
      scale: 0.55,
      useCORS: true,
      logging: false,
      backgroundColor: "#fafbfc",
      onclone: (clonedDoc) => {
        clonedDoc.querySelectorAll("[data-pdf-exclude]").forEach((node) => node.remove());
      },
    },
  });
}
