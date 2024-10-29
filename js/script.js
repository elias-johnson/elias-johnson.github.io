function decimalToBinary() {
	// Retrieve the decimal input value
	const decimal = document.getElementById('decimalInput').value;
	let binary = "";
	
	// Check if the input is a valid number
	if (decimal === "" || isNaN(decimal)) {
		document.getElementById('decimalToBinaryResult').innerText = "Invalid number.";
	} else {
		// Convert the decimal to a positive binary
		decimal = Math.abs(decimal);
		binary = parseInt(decimal, 10).toString(2);
		
		// Check if decimal is positive
		if (decimal >= 0) {
			// Add a 0 if the most significant bit is a 1
			if (binary[0] === '1') {
				binary = '0' + binary;
			}	
		
			// Sign-extend with 0 if length of binary is not divisible by 4
			while (binary.length % 4 != 0) {
				binary = '0' + binary;
			}			
		} else {
			// Invert the positive binary
			for (let i = 0; i < binary.length; i++) {
				if (binary[i] === '0') {
					binary[i] = 1;
				} else {
					binary[i] = 0;
				}	
			}
			
			// Add 1 to the decimal
			binary = parseInt(binary, 2).toString(10);
			binary++;
			binary = parseInt(binary, 10).toString(2);
			
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