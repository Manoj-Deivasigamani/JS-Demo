document.addEventListener("DOMContentLoaded", function() {
    const printButton = document.getElementById("printButton");
    const outputParagraph = document.getElementById("output");
    
    printButton.addEventListener("click", function() {
        let numbers = "";
        for (let i = 1; i <= 100; i++) {
            numbers += i + " ";
        }
        outputParagraph.textContent = numbers;
    });
});