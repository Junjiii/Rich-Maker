const validateEmailAndPassword = (phoneNumber, password) => {
  const phoneNumberPattern = 
  /^[0-9]{11}$/;

  const passwordRegex = 
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{10,}/;

  if (!phoneNumberPattern.test(phoneNumber)) {
    const err = new Error("invalid email");
    err.statusCode = 400;
    throw err;
  }
  if (!passwordRegex.test(password)) {
    const error = new Error("INVALID_USER password");
    error.statusCode = 400;

    throw error;
  }
  
};

module.exports = { validateEmailAndPassword } ;