function validatePhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.trim();
    if (phoneNumber.length >= 10 && phoneNumber.length <= 13 &&/^\d+$/.test(phoneNumber)) {
      return "nomor hp vslid";
    } else {
      return "nomor hp tdk valid";
    }
  }
  
  console.log(validatePhoneNumber("08123456789"));
  console.log(validatePhoneNumber("0812 3456 789"));
  console.log(validatePhoneNumber("0812345678a"));
  console.log(validatePhoneNumber("12345"));
  