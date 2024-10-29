function decimalToBinary() {
	// Retrieve the decimal input value
	const decimal = document.getElementById('decimalInput').value;
	let binary = "";
	
	// Check if the input is a valid integer
	if (decimal === "" || isNaN(decimal) || decimal % 1 != 0) {
		document.getElementById('decimalToBinaryResult').innerText = "Invalid number.";
	} else {
		// Convert the decimal to a positive binary
		positiveDecimal = Math.abs(decimal);
		binary = parseInt(positiveDecimal, 10).toString(2);
		
		// Add a 0 if the most significant bit is a 1
		if (binary[0] === '1') {
			binary = '0' + binary;
		}	
		
		// Sign-extend with 0 if length of binary is not divisible by 4
		while (binary.length % 4 != 0) {
			binary = '0' + binary;
		}			
		
		// Check if the original decimal was negative
		if (decimal < 0) {
			// Invert the positive binary
			let invertedBinary = "";
			for (let i = 0; i < binary.length; i++) {
				if (binary[i] === '0') {
					invertedBinary += '1';
				} else {
					invertedBinary += '0';
				}	
			}
			binary = invertedBinary;
			
			// Add 1 to the decimal
			binary = parseInt(binary, 2).toString(10);
			binary++;
			binary = parseInt(binary, 10).toString(2);		
		}	

		// Display the result
		binary = binary.replace(/(.{4})/g, '$1 ').trim();
		document.getElementById('decimalToBinaryResult').innerText = `${binary}`;
	}	
}