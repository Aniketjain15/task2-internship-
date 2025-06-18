document.getElementById("cvForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const summary = document.getElementById("summary").value;
  const template = document.getElementById("template").value;

  document.getElementById("previewName").innerText = name;
  document.getElementById("previewEmail").innerText = email;
  document.getElementById("previewSummary").innerText = summary;

  const cvBox = document.getElementById("cvPreview");
  cvBox.className = "cv-box " + template;
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const element = document.getElementById("cvPreview");

  const opt = {
    margin: 0.5,
    filename: 'My_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
});
