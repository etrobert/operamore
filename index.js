import "./node_modules/html2canvas/dist/html2canvas.js"

html2canvas(document.body).then(canvas => {
    document.body.appendChild(canvas)
});
