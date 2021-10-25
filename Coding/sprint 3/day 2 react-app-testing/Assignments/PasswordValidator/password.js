function Password(input) {
    let sL = false;
    let cL = false;
    let numbers = false;
    let minChar = false;
    let specialChar = false;

    if (input.length >= 6) {
        minChar = true;

        for (let i = 0; i < input.length; i++) {
            const value = input.charCodeAt(i);
            if (value >= 97 && value <= 122) {
                sL = true;
                break;
            }
        }
        for (let i = 0; i < input.length; i++) {
            const value = input.charCodeAt(i);
            if (value >= 65 && value <= 90) {
                cL = true;
                break;
            }
        }
        for (let i = 0; i < input.length; i++) {
            const value = input.charCodeAt(i);
            if (value >= 48 && value <= 57) {
                numbers = true;
                break;
            }
        }

        for (let i = 0; i < input.length; i++) {
            const value = input.charCodeAt(i);
            if ((value >= 33 && value <= 47) || (value >= 58 && value <= 64)) {
                specialChar = true;
                break;
            }
        }
    }

    let result = "";
    if (minChar) {
        if (cL) {
            if (sL) {
                if (numbers) {
                    if (specialChar) {
                        result = "valid";
                        return result;
                    }
                    result = "1 special character";
                    return result;
                }
                result = "1 numbers";
                return result;
            }
            result = "1 small letter";
            return result;
        }
        result = "1 capital letter";
        return result;
    }

    result = "password length 6";
    return result;
}

module.exports = Password;