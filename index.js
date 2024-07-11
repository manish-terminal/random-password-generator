  
    function generator() {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let characterSet = '';
        
        // Get the state of checkboxes
        const upper = document.getElementById('upper').checked;
        const lower = document.getElementById('lower').checked;
        const number = document.getElementById('number').checked;
        const symbols = document.getElementById('symbols').checked;
        
        // Append characters based on checkboxes
        if (upper) {
            characterSet += uppercaseChars;
        }
        if (lower) {
            characterSet += lowercaseChars;
        }
        if (number) {
            characterSet += numberChars;
        }
        if (symbols) {
            characterSet += specialChars;
        }
        
        // Get the length of the password
        let length = parseInt(document.getElementById('length').value);
        
        // Check if characterSet is empty or length is invalid
        if (characterSet.length === 0 ||  isNaN(length)||length <= 0) {
            document.getElementById('result').textContent = 'Please select at least one character type and enter a valid length.';
            return;
        }
        
        // Generate the password
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            password += characterSet[randomIndex];
        }
        
        // Display the result
        document.getElementById('result').textContent = `Generated Password: ${password}`;
    }
