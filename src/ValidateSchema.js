export const basicDetailsValidateSchema = {
  firstname: {
    required: true
  },
  lastname: {
    required: true,
  },
  phone: {
    required: true,
    // pattern: /^[0-9]{10}$/,
  },
  address: {
    street: {
      // required: true,
    },
    state: {
      // required: true,
    },
    city: {
      // required: true,
    },
    zipCode: {
      // required: true,
      // pattern: /^[0-9]{6}$/,
    },
  },
  gender: {
    required: true,
  },
  email: {
    // required: true,
  },
};
export const flightScheduleValidateSchema = {
  flightNo: { required: false },
  airlineName: { required: false },
  tripType: { required: false },
  departureAirport: { required: false },
  arrivedAirport: { required: false },
  departureDate: { required: false },
  returnDate: { required: false },
  seatClass: { required: false },
  photo: null,
  departureName: { required: false },
};
export const ticketPurchaseValidateSchema = {
  cardnumber: {
    required: true,
    pattern:
      /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
  },
  paymentDateTime: { required: true },
  Phone: {
    required: true,
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  },
  month: { required: true },
  fullName: { required: true },
  cvv: { required: true, pattern: /^[0-9]{3}$/ },
};
export const gstDetailsValidateSchema = {
  gstNumber: {
    required: true,
    pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  },
  companyID: {
    required: true,
  },
  companyName: { required: true },
  companyaddress: {
    companystreet: { required: true, pattern: /^[ A-Za-z0-9.-]*$/ },
    companyState: { required: true },
    companyCity: { required: true },
    companyZipcode: { required: true, pattern: /^[0-9]{6}$/ },
  },
};
export const contactInformationValidateSchema = {
  companyPhone: {
    required: true,
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  },
  mobilePhone: {
    required: true,
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  },
  emergencyContactNumber: {
    required: true,
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  },
  emergencyContactName: {
    required: true,
  },
  currentaddress: {
    currentstreet: { required: true, pattern: /^[ A-Za-z0-9.-]*$/ },
    currentState: { required: true },
    currentCity: { required: true },
    currentZipcode: { required: true, pattern: /^[0-9]{6}$/ },
  },
  permanentaddress: {
    permanentstreet: { required: true, pattern: /^[ A-Za-z0-9.-]*$/ },
    permanentState: { required: true },
    permanentCity: { required: true },
    permanentZipcode: { required: true, pattern: /^[0-9]{6}$/ },
  },
};
export const ValidateSchema = {
  firstname: {
    required: true,
    // minLength: 2,
  },
  lastname: {
    required: true,
    // minLength: 2,
  },
  phone: {
    required: true,
    // pattern: /^[0-9]{10}$/,
  },
  address: {
    street: {
      // required: true,
    },
    state: {
      // required: true,
    },
    city: {
      // required: true,
    },
    zipCode: {
      // required: true,
      // pattern: /^[0-9]{6}$/,
    },
  },
  gender: {
    // required: true,
  },
  email: {
    // required: true,
  },
  flightNo: { 
    required: true,
    //  pattern: /^[A-Z]{2}\s{0, 1}[0-9]{3, 4}$/ 
  },
  airlineName: { required: true },
  tripType: { required: true },
  departureAirport: { required: true },
  arrivedAirport: { required: true },
  departureDate: { required: true },
  returnDate: { required: true },
  seatClass: { required: true },
  photo: null,
  departureName: { required: true },
  cardnumber: {
     required: true,
      // pattern: /^(?:3[47][0-9]{13})$/ 
    },
  paymentDateTime: { required: true },
  Phone: { required: true, 
    // pattern: /^[0-9]{10}$/ 
  },
  month: { required: true },
  fullName: { required: true },
  cvv: { required: true, 
    // pattern: /^[0-9]{3, 4}$/
 },
  gstNumber: {
    required: true,
    // pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  },
  companyID: {
    required: true,
  },
  companyName: { required: true },
  companyaddress: {
    companystreet: { required: true,
      //  pattern: /^[ A-Za-z0-9.-]*$/ 
    },
    companyState: { required: true },
    companyCity: { required: true },
    companyZipcode: { required: true, 
      // pattern: /^[0-9]{6}$/
     },
  },
  companyPhone: {
    required: true,
    // pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  },
  mobilePhone: { required: true,
    //  pattern: /^[0-9]{10}$/ 
    },
  emergencyContactNumber: { required: true,
    //  pattern: /^[0-9]{10}$/ 
    },
  emergencyContactName: { required: true,
    //  pattern: /^[0-9]{10}$/
     },
  currentaddress: {
    currentstreet: { required: true,
      //  pattern: /^[ A-Za-z0-9.-]*$/
       },
    currentState: { required: true },
    currentCity: { required: true },
    currentZipcode: { required: true, 
      // pattern: /^[0-9]{6}$/
     },
  },
  permanentaddress: {
    permanentstreet: { required: true, 
      // pattern: /^[ A-Za-z0-9.-]*$/
     },
    permanentState: { required: true },
    permanentCity: { required: true },
    permanentZipcode: { required: true,
      //  pattern: /^[0-9]{6}$/ 
      },
  },
};

// gts number:
// ^ represents the starting of the string.
// [0-9]{2} represents the first two characters should be a number.
// [A-Z]{5} represents the next five characters should be any upper case alphabets.
// [0-9]{4} represents the next four characters should be any number.
// [A-Z]{1} represents the next character should be any upper case alphabet.
// [1-9A-Z]{1} represents the 13th character should be a number from 1-9 or an alphabet.
// Z represents the 14th character should be Z.
// [0-9A-Z]{1} represents the 15th character should be an alphabet or a number.
// $ represents the ending of the string.

//cvv
// ^ represents the starting of the string.
// [0-9] represents the digit between 0-9.
// {3, 4} represents the string that has 3 or 4 digits.
// $ represents the ending of the string.

//fllight number
// regex= “^[A-Z]{2}\s{0, 1}[0-9]{3, 4}$
// ^ : Start of the string
// [A-Z]{2} :  This pattern will match two of the preceding items in the range from “A” to “Z”.
// \s{0, 1} : This pattern will match zero or one the preceding item if It  is a whitespace.
// [0-9]{3, 4} : This pattern will match 3 or 4 of the preceding items, if it is in the range from 0 to 9.
// $: End of the String.

//example  card 378282246310006
//gst num,ber : 06BZAHM6385P6Z2
