function decimalToBinary() {
	// Retrieve the decimal input value from the page
	let decimal = document.getElementById('decimalInput').value;
	let binary = "";

	// Check if the input is a valid integer
	if (decimal === "" || isNaN(decimal) || decimal % 1 != 0) {
		document.getElementById('decimalToBinaryResult').innerText = "Invalid number.";
		const binaryElement = document.getElementById("decimalToBinaryResult");
		binaryElement.style.opacity = "1";
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
		const binaryElement = document.getElementById("decimalToBinaryResult");
		binaryElement.style.opacity = "1";
	}
}

function binaryToDecimal() {
	// Retrieve the binary input value from the page
	let binary = document.getElementById('binaryInput').value;
	let decimal = 0;

	// Check if the input is a valid binary number
	if (!/^[01]+$/.test(binary)) {
		document.getElementById('binaryToDecimalResult').innerText = "Invalid binary.";
		const decimalElement = document.getElementById("binaryToDecimalResult");
		decimalElement.style.opacity = "1";
	} else {
		// Convert to base 10
		decimal = parseInt(binary, 2).toString(10);

		// Check if binary is negative
		let negativeDecimal = 0;
		if (binary[0] === '1') {
			// Calculate the value of the most significant bit
			let msb = 2 ** (binary.length - 1);
			negativeDecimal -= msb;

			// Iterate through the remaining bits to determine total value
			for (let i = 1; i < binary.length; i++) {
				if (binary[i] === '1') {
					negativeDecimal += 2 ** ((binary.length - i) - 1);;
				}
			}
			decimal = negativeDecimal
		}

		// Display the result
		document.getElementById('binaryToDecimalResult').innerText = `${decimal}`;
		const decimalElement = document.getElementById("binaryToDecimalResult");
		decimalElement.style.opacity = "1";
	}
}