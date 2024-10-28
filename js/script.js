function decimalToBinary() {
    // Retrieve the decimal input value from the HTML input element
    const decimal = document.getElementById('decimalInput').value;

    // Check if the input is a valid number
    if (decimal === "" || isNaN(decimal)) {
        document.getElementById('decimalToBinaryResult').innerText = "Please enter a valid number.";
        return;
    }

    // Convert the decimal number to binary
    const binary = (parseInt(decimal, 10) >>> 0).toString(2);

    // Display the result in the paragraph with id "result"
    document.getElementById('decimalToBinaryResult').innerText = "Binary: ${binary}";		
}
