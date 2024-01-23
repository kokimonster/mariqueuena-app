function Validation(values) {
    let error = {};

    // Email pattern that detects without space and letter.
    const email_pattern = /^[^\s]+@[^\s@]+\.[^\s@]+$/;
  
    // Password pattern that detects at least 1 digit, 1 small letter, 1 capital letter, minimum of 8 letters.
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (values.fName === "") {
      error.fName = "First Name should not be empty";
    }
  
    if (values.lName === "") {
      error.lName = "Last Name should not be empty";
    }
  
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Invalid email format";
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password must contain at least 1 digit, 1 small letter, 1 capital letter, and be at least 8 characters long";
    }
  
    return error;
  }

export default Validation;