function decimalToBinary() {
	// Retrieve the decimal input value
	const decimal = document.getElementById('decimalInput').value;
	let binary = "";
	
	// Check if the input is a valid number
	if (decimal === "" || isNaN(decimal)) {
		document.getElementById('decimalToBinaryResult').innerText = "Invalid number.";
	} else {
		// Convert the decimal to binary
		if (decimal >= 0) {
			binary = parseInt(decimal, 10).toString(2);
			
			// Add a 0 if the most significant bit is a 1
			if (binary[0] === '1') {
				binary = '0' + binary;
			}	
			
			// Sign-extend with 0 if length of binary is not divisible by 4
			while (binary.length % 4 != 0) {
				binary = '0' + binary;
			}
		} else {
			const positiveDecimal = Math.abs(decimal);
			binary = (1 << 8) + positiveDecimal;
			
			// Remove excess leading bits
			let index = 0
			while (index >= 0) {
				if (binary[index] === '1') {
					binary = binary.slice(1);
					index++;
				} else {
					index = -1;
				}	
			}
			
			// Sign-extend with 1 if length of binary is not divisible by 4
			while (binary.length % 4 != 0) {
				binary = '1' + binary;
			}			
		}

		// Display the result
		binary = binary.replace(/(.{4})/g, '$1 ').trim();
		document.getElementById('decimalToBinaryResult').innerText = `${binary}`;
	}	
}