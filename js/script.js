function decimalToBinary {
	// Retrieve the decimal input value
	const decimal = document.getElementById('decimalInput').value;
	
	// Check if the input is a valid number
	if (decimal === "" || isNaN(decimal)) {
		document.getElementById('decimalToBinaryResult').innerText = "Invalid number.";
	} else {
		// Convert the decimal to binary
		const binary = (parseInt(decimal, 10) >>> 0).toString(2);
		
		// Convert to 2s-complement
		
		// Display the result
		document.getElementById('decimalToBinaryResult').innerText = `${binary}`;
	}	
}