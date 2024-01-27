function passwordStrong(value) {
    let strength = 0;

    const length = value.password.length > 8;
    const upper = /[A-Z]/.test(value.password);
    const lower = /[a-z]/.test(value.password);
    const number = /[0-9]/.test(value.password);
    const special = /[^A-Za-z0-9]/.test(value.password);

    if (length) {
        strength += 1;
    }
    if (upper) {
        strength += 1;
    }
    if (lower) {
        strength += 1;
    }
    if (number) {
        strength += 1;
    }
    if (special) {
        strength += 1;
    }

    let strengthLabel;
    if (strength === 1 || strength === 2) {
        strengthLabel = "Weak";
    } else if (strength === 3 || strength === 4) {
        strengthLabel = "Medium";
    } else if (strength === 5) {
        strengthLabel = "Strong";
    }

    return strength;

}

export default passwordStrong;