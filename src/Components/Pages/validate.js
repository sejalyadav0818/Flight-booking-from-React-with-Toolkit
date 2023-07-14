import {
  basicDetails,
  flightSchedule,
  ticketPurchase,
  gstDetails,
  contactInformation,
  setErrors,
} from "../form/FlightBookingForm";

export function validateBasicDetails() {
  let valid = true;
  const newErrors = {};

  if (!basicDetails.firstname) {
    newErrors.firstname = "First name is required";
    valid = false;
  } else if (!/^[^\d]+$/i.test(basicDetails.firstname)) {
    newErrors.firstname = "Invalid first name";
    valid = false;
  }

  if (!basicDetails.lastname) {
    newErrors.lastname = "Last name is required";
    valid = false;
  } else if (!/^[^\d]+$/i.test(basicDetails.lastname)) {
    newErrors.lastname = "Invalid last name";
    valid = false;
  }

  if (!basicDetails.phone) {
    newErrors.phone = "Phone number is required";
    valid = false;
  } else if (/^\+\d{1,3}\d{1,14}$/.test(basicDetails.phone)) {
    newErrors.phone = "Invalid phone number";
    valid = false;
  } else if (basicDetails.phone.length !== 10) {
    newErrors.phone = "Phone number should be 10 digits";
    valid = false;
  }

  if (!basicDetails.address.street) {
    newErrors.street = "Street is required";
    valid = false;
  }

  if (!basicDetails.address.state) {
    newErrors.state = "State is required";
    valid = false;
  }

  if (!basicDetails.address.city) {
    newErrors.city = "City is required";
    valid = false;
  }

  if (!basicDetails.address.zipCode) {
    newErrors.zipCode = "Zip code is required";
    valid = false;
  } else if (
    !/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/i.test(basicDetails.address.zipCode)
  ) {
    newErrors.zipCode = "Invalid zip code";
    valid = false;
  }

  if (!basicDetails.gender) {
    newErrors.gender = "Gender is required";
    valid = false;
  }

  if (!basicDetails.email) {
    newErrors.email = "Email is required";
    valid = false;
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(basicDetails.email)
  ) {
    newErrors.email = "Invalid email address";
    valid = false;
  }

  setErrors(newErrors);
  return valid;
}
export function validateFlightSchedule() {
  let valid = true;
  const newErrors = {};

  if (!flightSchedule.flightNo) {
    newErrors.flightNo = "Flight number is required";
    valid = false;
  }

  if (!flightSchedule.airlineName) {
    newErrors.airlineName = "Airline name is required";
    valid = false;
  }

  if (!flightSchedule.tripType) {
    newErrors.tripType = "Trip type is required";
    valid = false;
  }

  if (!flightSchedule.departureAirport) {
    newErrors.departureAirport = "Departure airport is required";
    valid = false;
  }

  if (!flightSchedule.arrivedAirport) {
    newErrors.arrivedAirport = "Arrival airport is required";
    valid = false;
  }

  if (!flightSchedule.departureDate) {
    newErrors.departureDate = "Departure date is required";
    valid = false;
  }

  if (flightSchedule.tripType === "return" && !flightSchedule.returnDate) {
    newErrors.returnDate = "Return date is required";
    valid = false;
  }

  if (!flightSchedule.seatClass) {
    newErrors.seatClass = "Seat class is required";
    valid = false;
  }

  setErrors(newErrors);
  return valid;
}
export function validateTicketPurchase() {
  let valid = true;
  const newErrors = {};

  if (!ticketPurchase.fullName) {
    newErrors.fullName = "Full name is required";
    valid = false;
  }

  if (!ticketPurchase.cardnumber) {
    newErrors.cardnumber = "Card number is required";
    valid = false;
  }

  if (!ticketPurchase.paymentDateTime) {
    newErrors.paymentDateTime = "Payment date and time are required";
    valid = false;
  }

  if (!ticketPurchase.Phone) {
    newErrors.Phone = "Phone number is required";
    valid = false;
  }

  if (!ticketPurchase.month) {
    newErrors.month = "Expiry month is required";
    valid = false;
  }

  if (!ticketPurchase.cvv) {
    newErrors.cvv = "CVV is required";
    valid = false;
  }

  setErrors(newErrors);
  return valid;
}
export function validateGstDetails() {
  let valid = true;
  const newErrors = {};

  if (!gstDetails.gstNumber) {
    newErrors.gstNumber = "GST number is required";
    valid = false;
  }

  if (!gstDetails.companyName) {
    newErrors.companyName = "Company name is required";
    valid = false;
  }

  // if (gstDetails.companyaddress.companystreet) {
  //   newErrors.companyStreet = "Company street is required";
  //   valid = false;
  // }

  // if (!gstDetails.companyaddress.companyState) {
  //   newErrors.companyState = "Company state is required";
  //   valid = false;
  // }

  // if (!gstDetails.companyaddress.companyCity) {
  //   newErrors.companyCity = "Company city is required";
  //   valid = false;
  // }

  if (!gstDetails.companyaddress.companyZipcode) {
    newErrors.companyZipcode = "Company zipcode is required";
    valid = false;
  }

  setErrors(newErrors);
  return valid;
}
export function validateContactInformation() {
  let valid = true;
  const newErrors = {};

  if (!contactInformation.mobilePhone) {
    newErrors.mobilePhone = "Mobile phone number is required";
    valid = false;
  }

  if (!contactInformation.emergencyContactNumber) {
    newErrors.emergencyContactNumber = "Emergency contact number is required";
    valid = false;
  }

  if (!contactInformation.emergencyContactName) {
    newErrors.emergencyContactName = "Emergency contact name is required";
    valid = false;
  }

  // if (!contactInformation.currentaddress.currentstreet) {
  //   newErrors.currentStreet = "Current street is required";
  //   valid = false;
  // }

  // if (!contactInformation.currentaddress.currentState) {
  //   newErrors.currentState = "Current state is required";
  //   valid = false;
  // }

  // if (!contactInformation.currentaddress.currentCity) {
  //   newErrors.currentCity = "Current city is required";
  //   valid = false;
  // }

  // if (!contactInformation.currentaddress.currentZipcode) {
  //   newErrors.currentZipcode = "Current zipcode is required";
  //   valid = false;
  // }

  setErrors(newErrors);
  return valid;
}
