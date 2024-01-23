function Validation(values) {
    let error = {};

    //Name pattern that detects special characters.
    const name_pattern = /^[a-zA-Z\-'. ]+$/;

    // Email pattern that detects without space and letter.
    const email_pattern = /^[^\s]+@[^\s@]+\.[^\s@]+$/;
  
    // Password pattern that detects at least 1 digit, 1 small letter, 1 capital letter, minimum of 8 letters.
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (values.fName === "") {
      error.fName = "First Name should not be empty";
    } else if (!name_pattern.test(values.fName)) {
      error.fName = "Invalid first name format";
    }
  
    if (values.lName === "") {
      error.lName = "Last Name should not be empty";
    } else if (!name_pattern.test(values.lName)) {
      error.lName = "Invalid last name format";
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
    } else if(values.password != values.password2){
      error.password2 = "Password is not the same as above."
    }
  
    return error;
  }

export default Validation;