// Auto convert as user types
document.getElementById("input").addEventListener("input", convert);

function convert() {
    const text = document.getElementById("input").value;
    document.getElementById("output").innerText = text;
}

/* --- COPY TEXT --- */
function copyText() {
    const text = document.getElementById("output").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}

/* --- DOWNLOAD TXT --- */
function downloadText() {
    const outputText = document.getElementById("output").innerText;

    const blob = new Blob([outputText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "converted_text.txt";
    a.click();

    URL.revokeObjectURL(url);
}

/* --- DOWNLOAD PNG (Screenshot Output) --- */
function downloadPNG() {
    const output = document.getElementById("output");

    html2canvas(output, { scale: 3 }).then(canvas => {
        const link = document.createElement("a");
        link.download = "converted_output.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}

/* --- DARK MODE --- */
function toggleDark() {
    document.body.classList.toggle("dark");
}

/* --- CLEAR TEXT --- */
function clearText() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerText = "";
}