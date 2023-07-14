import React, { useState, useEffect } from "react";
import data from "../Options/data.json";
import { useDispatch } from "react-redux";
import { Typography, Stepper, Step, StepLabel } from "@mui/material";
import "../../assets/style.css";
import { useLocation } from "react-router-dom";
import { select } from "../../redux/FlightDataSlice";
import BasicDetails from "../Pages/BasicDetails";
import FightSchedule from "../Pages/FightSchedule";
import TIcketPurchase from "../Pages/TIcketPurchase";
import GstDetails from "../Pages/GstDetails";
import ContactInformation from "../Pages/ContactInformation";

const FlightBookingForm = () => {
  const [isEditMode, setIsEditMode] = useState("");
  const ids = new Date().getTime().toString();
  const [id, setid] = useState(ids);
  const [EditData, setEditData] = useState();
  const [editt, setedit] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [myimage, setMyImage] = React.useState(null);
  const localdata = JSON.parse(localStorage.getItem("allData"));
  console.log(localdata);
  const [allData, setAllData] = useState(localdata || []);
  const [activeStep, setActiveStep] = useState(0);

  const uploadImage = (e) => {
    setMyImage(URL.createObjectURL(e.target.files[0]));
  };
  const [state, setState] = useState({
    selectedCountry: "",
    isCountrySelected: false,
    selectedCity: "",
    isCitySelected: false,
  });
  const countryList = data.states;
  const states = countryList.map((c) => {
    return c.state;
  });
  const cities = state.isCountrySelected
    ? countryList
        .filter((d) => d.state === state.selectedCountry)
        .map((c) => {
          return c.cities;
        })[0]
    : [];
  const onCountryChange = (state) => {
    let setIsCountrySelected = state !== "" ? true : false;
    setBasicDetails((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        state: state,
      },
    }));
    setGstDetails((prevState) => ({
      ...prevState,
      companyaddress: {
        ...prevState.companyaddress,
        companyState: state,
      },
    }));
    setContactInformation((prevState) => ({
      ...prevState,
      currentaddress: {
        ...prevState.currentaddress,
        currentState: state,
      },
    }));
    setState({
      selectedCountry: state,
      isCountrySelected: setIsCountrySelected,
      selectedCity: "",
      isCitySelected: false,
    });
  };
  const onCityChange = (city) => {
    let setIsCitySelected = city !== "" ? true : false;

    setBasicDetails((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        city: city,
      },
    }));
    setGstDetails((prevState) => ({
      ...prevState,
      companyaddress: {
        ...prevState.companyaddress,
        companyCity: city,
      },
    }));
    setContactInformation((prevState) => ({
      ...prevState,
      currentaddress: {
        ...prevState.currentaddress,
        currentCity: city,
      },
    }));
    setState({
      ...state,
      selectedCity: city,
      isCitySelected: setIsCitySelected,
    });
  };

  function getSteps() {
    return [
      "Basic Details",
      "Flight Schedule",
      "Ticket Purchase",
      "GST Details",
      "contact Information",
    ];
  }
  function validateBasicDetails(basicDetails, setErrors) {
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
    } else if (!/^[0-9\b]+$/i.test(basicDetails.phone)) {
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
      newErrors.zipCode = "Zip code should be 6 digits";
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

    if (!basicDetails.picture) {
      newErrors.picture = "image is required";
      valid = false;
    } else if (basicDetails.picture.match(/\.(jpg|jpeg|png)$/)) {
      newErrors.picture = "image should be jpg|jpeg|png.";
      valid = false;
    } else if (basicDetails.picture > 1 * 1000 * 1024) {
      newErrors.picture = "image with maximum size of 1MB is allowed";
      valid = false;
    }
    setErrors(newErrors);
    console.log(newErrors);
    return valid;
  }

  function validateFlightSchedule() {
    let valid = true;
    const newErrors = {};

    if (!flightSchedule.flightNo) {
      newErrors.flightNo = "Flight number is required";
      valid = false;
    } else {
      if (!/^([A-Z]{2}\d{4})$/i.test(flightSchedule.flightNo)) {
        newErrors.flightNo =
          "First two characters should be from uppercase alphabet letters and four latters should be number.Example : AS1234 ";
        valid = false;
      }
    }

    if (!flightSchedule.airlineName) {
      newErrors.airlineName = "Airline name is required";
      valid = false;
    } else {
      if (!/^[A-Za-z\s]+$/i.test(flightSchedule.airlineName)) {
        newErrors.airlineName = "Invalid airline name";
        valid = false;
      }
    }

    if (!flightSchedule.tripType) {
      newErrors.tripType = "Trip type is required";
      valid = false;
    }

    if (!flightSchedule.departureAirport) {
      newErrors.departureAirport = "Departure airport is required";
      valid = false;
    } else {
      if (!/^[A-Za-z\s]+$/i.test(flightSchedule.departureAirport)) {
        newErrors.departureAirport = "Invalid departure airport";
        valid = false;
      }
    }

    if (!flightSchedule.arrivedAirport) {
      newErrors.arrivedAirport = "Arrival airport is required";
      valid = false;
    } else {
      if (!/^[A-Za-z\s]+$/i.test(flightSchedule.arrivedAirport)) {
        newErrors.arrivedAirport = "Invalid arrival airport";
        valid = false;
      }
    }

    if (flightSchedule.departureAirport === flightSchedule.arrivedAirport) {
      newErrors.arrivedAirport =
        "Departure and arrival airports cannot be the same";
      valid = false;
    }

    if (!flightSchedule.departureDate) {
      newErrors.departureDate = "Departure date is required";
      valid = false;
    } else {
      const currentDate = new Date();
      const departureDate = new Date(flightSchedule.departureDate);
      if (departureDate <= currentDate) {
        newErrors.departureDate = "Invalid departure date";
        valid = false;
      }
    }

    if (flightSchedule.tripType === "return") {
      if (!flightSchedule.returnDate) {
        newErrors.returnDate = "Return date is required";
        valid = false;
      } else {
        const departureDate = new Date(flightSchedule.departureDate);
        const returnDate = new Date(flightSchedule.returnDate);
        if (returnDate <= departureDate) {
          newErrors.returnDate = "Invalid return date";
          valid = false;
        }
      }
    }

    if (!flightSchedule.seatClass) {
      newErrors.seatClass = "Seat class is required";
      valid = false;
    } else {
      // if (!/^(Economy Class|One Way Trips|Economy Class|Business Class)$/i.test(flightSchedule.seatClass)) {
      //   newErrors.seatClass = "Invalid seat class";
      //   valid = false;
      // }
    }

    setErrors(newErrors);
    return valid;
  }

  function validateTicketPurchase() {
    let valid = true;
    const newErrors = {};

    if (!ticketPurchase.fullName) {
      newErrors.fullName = "Full name is required";
      valid = false;
    } else if (!/^[^\d]+$/i.test(ticketPurchase.fullName)) {
      newErrors.fullName = "Invalid last name";
      valid = false;
    }

    if (!ticketPurchase.cardnumber) {
      newErrors.cardnumber = "Card number is required";
      valid = false;
    } else {
      if (!/^\d{16}$/.test(ticketPurchase.cardnumber)) {
        newErrors.cardnumber =
          "Invalid card number card length should be 16 and statring with Starting with 1111 Exampele : 1111222233334444";
        valid = false;
      }
    }

    if (!ticketPurchase.paymentDateTime) {
      newErrors.paymentDateTime = "Payment date and time are required";
      valid = false;
    } else {
      const currentDateTime = new Date();
      const paymentDateTime = new Date(ticketPurchase.paymentDateTime);
      if (paymentDateTime <= currentDateTime) {
        newErrors.paymentDateTime =
          "Invalid payment date and time it must be a future data";
        valid = false;
      }
    }

    if (!ticketPurchase.Phone) {
      newErrors.phone = "phone is required";
      valid = false;
    } else if (!/^[0-9\b]+$/i.test(ticketPurchase.Phone)) {
      newErrors.Phone = "Invalid phone number";
      valid = false;
    } else if (ticketPurchase.Phone.length !== 10) {
      newErrors.Phone = "Phone number should be 10 digits";
      valid = false;
    }

    if (!ticketPurchase.month) {
      newErrors.month = "Expiry month is required";
      valid = false;
    } else {
      if (!/^0[1-9]|1[0-2]$/i.test(ticketPurchase.month)) {
        newErrors.month = "Invalid expiry month";
        valid = false;
      }
    }

    if (!ticketPurchase.cvv) {
      newErrors.cvv = "CVV is required";
      valid = false;
    } else {
      if (!/^\d{3}$/i.test(ticketPurchase.cvv)) {
        newErrors.cvv = "Invalid CVV";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  }

  function validateGstDetails() {
    let valid = true;
    const newErrors = {};

    if (!gstDetails.gstNumber) {
      newErrors.gstNumber = "GST number is required";
      valid = false;
    } else {
      if (
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
          gstDetails.gstNumber
        )
      ) {
        newErrors.gstNumber =
          "Invalid GST formate no should be Example : 06BZAHM6385P6Z2";
        valid = false;
      }
    }

    if (!gstDetails.companyName) {
      newErrors.companyName = "Company name is required";
      valid = false;
    }

    if (!gstDetails.companyID) {
      newErrors.companyID = "Company is required";
      valid = false;
    } else if (
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(gstDetails.companyID)
    ) {
      newErrors.companyID = "Invalid  Company's email address";
      valid = false;
    }

    if (!gstDetails.companyaddress.companystreet) {
      newErrors.companystreet = "Street is required";
      valid = false;
    }

    if (!gstDetails.companyaddress.companyState) {
      newErrors.companyState = "State is required";
      valid = false;
    }

    if (!gstDetails.companyaddress.companyCity) {
      newErrors.companyCity = "City is required";
      valid = false;
    }

    if (!gstDetails.companyaddress.companyZipcode) {
      newErrors.companyZipcode = "Zip code is required";
      valid = false;
    } else if (
      !/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/i.test(
        gstDetails.companyaddress.companyZipcode
      )
    ) {
      newErrors.companyZipcode = "Zip code should be 6 digits";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  }

  function validateContactInformation() {
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

    if (!contactInformation.companyPhone) {
      newErrors.companyPhone = "Phone number is required";
      valid = false;
    } else if (!/^[0-9\b]+$/i.test(contactInformation.companyPhone)) {
      newErrors.phone = "Invalid phone number";
      valid = false;
    } else if (contactInformation.companyPhone.length !== 10) {
      newErrors.companyPhone = "Phone number should be 10 digits";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  }
  const steps = getSteps();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <BasicDetails
            allData={allData}
            setBasicDetails={setBasicDetails}
            basicDetails={basicDetails}
            errors={errors}
            onChange={handleInputChange}
            onCountryChange={onCountryChange}
            onCityChange={onCityChange}
            states={states}
            cities={cities}
          />
        );
      case 1:
        return (
          <FightSchedule
            setFlightSchedule={setFlightSchedule}
            flightSchedule={flightSchedule}
            errors={errors}
            onCountryChange={onCountryChange}
            onCityChange={onCityChange}
          />
        );
      case 2:
        return (
          <TIcketPurchase
            setTicketPurchase={setTicketPurchase}
            ticketPurchase={ticketPurchase}
            errors={errors}
          />
        );
      case 3:
        return (
          <GstDetails
            setGstDetails={setGstDetails}
            gstDetails={gstDetails}
            errors={errors}
            onCountryChange={onCountryChange}
            onCityChange={onCityChange}
            states={states}
            cities={cities}
          />
        );
      case 4:
        return (
          <ContactInformation
            setContactInformation={setContactInformation}
            contactInformation={contactInformation}
            errors={errors}
            onCountryChange={onCountryChange}
            onCityChange={onCityChange}
            states={states}
            cities={cities}
          />
        );

      default:
        return "";
    }
  }
  const handleNext = () => {
    if (activeStep === 0) {
      const isValid = validateBasicDetails(basicDetails, setErrors);
      if (!isValid) {
        return;
      }
    }
    if (activeStep === 1) {
      const isValid = validateFlightSchedule();
      if (!isValid) {
        return;
      }
    }
    if (activeStep === 2) {
      const isValid = validateTicketPurchase();
      if (!isValid) {
        return;
      }
    }
    if (activeStep === 3) {
      const isValid = validateGstDetails();
      if (!isValid) {
        return;
      }
    }
    if (activeStep === 4) {
      const isValid = validateContactInformation();
      if (!isValid) {
        return;
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handlesave = () => {
    if (errors) {
      handleNext();
      const newData = {
        basicDetails: basicDetails,
        flightSchedule: flightSchedule,
        ticketPurchase: ticketPurchase,
        gstDetails: gstDetails,
        contactInformation: contactInformation,
        id: id,
      };
      console.log(newData);
      console.log(allData);
      const queryParams = new URLSearchParams(location.search);
      const idedit = queryParams.get("id");
      console.log("ifffffffffffffffffffffffffffffffff", idedit);
      setIsEditMode(idedit);
      console.log(isEditMode);
      if (idedit) {
        setedit(true);
        console.log("hnliknjhliknhliknhliknh");
      }
      const editdata = [];
      if (idedit) {
        console.log("fjiewjnfiwelo");
        console.log("ediiiiiiiiiiit", editt);
        setEditData(newData);
        editdata.push(newData);
        const ediitem = allData.find((index) => {
          // console.log(index);
          return index.id === idedit;
        });
        // console.log(ediitem);
        const editindex = allData.indexOf(ediitem);
        console.log(allData);
        console.log(editindex);
        console.log(allData[editindex]);
        allData[editindex] = editdata[0];
        console.log(allData);
        localStorage.setItem("allData", JSON.stringify(allData));
      } else {
        const updatedData = [...allData, newData];
        setAllData(updatedData);
        dispatch(select(updatedData));
        localStorage.setItem("allData", JSON.stringify(updatedData));
      } //else {
    }

    //   handleSubmit();
    // }
  };

  const handleSubmit = (event) => {
    const newData = {
      basicDetails: basicDetails,
      flightSchedule: flightSchedule,
      ticketPurchase: ticketPurchase,
      gstDetails: gstDetails,
      contactInformation: contactInformation,
      id: id,
    };
  
    let updatedData;
    if (isEditMode) {
      updatedData = allData.map((item) => (item.id === id ? newData : item));
    } else {
      updatedData = [...allData, newData];
    }

    setAllData(updatedData);
    localStorage.setItem("allData", JSON.stringify(updatedData));

    setBasicDetails({});
    setFlightSchedule({});
    setTicketPurchase({});
    setGstDetails({});
    setContactInformation({});
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleInputChange = (e, setter) => {
    let formData = "";
    if (activeStep == "0") {
      formData = setBasicDetails;
    }
    if (activeStep == "1") {
      formData = setFlightSchedule;
    }
    if (activeStep == "2") {
      formData = setTicketPurchase;
    }
    if (activeStep == "3") {
      formData = setGstDetails;
    }
    if (activeStep == "4") {
      formData = setContactInformation;
    }

    const { name, value } = e.target;
    formData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [basicDetails, setBasicDetails] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    address: { street: "", state: "", city: "", zipCode: "" },
    gender: "",
    email: "",
    picture: "",
  });

  const [flightSchedule, setFlightSchedule] = useState({
    flightNo: "",
    airlineName: "",
    tripType: "",
    departureAirport: "",
    arrivedAirport: "",
    departureDate: "",
    returnDate: "",
    seatClass: "",
    photo: null,
  });

  const [ticketPurchase, setTicketPurchase] = useState({
    fullName: "",
    cardnumber: "",
    paymentDateTime: "",
    Phone: "",
    month: "",
    cvv: "",
  });

  const [gstDetails, setGstDetails] = useState({
    gstNumber: "",
    companyName: "",
    companyaddress: {
      companystreet: "",
      companyState: "",
      companyCity: "",
      companyZipcode: "",
    },
  });

  const [contactInformation, setContactInformation] = useState({
    mobilePhone: "",
    emergencyContactNumber: "",
    emergencyContactName: "",
    currentaddress: {
      currentstreet: "",
      currentState: "",
      currentCity: "",
      currentZipcode: "",
    },
  });

  useEffect(() => {
    const storedData = localStorage.getItem("allData");
    if (storedData) {
      setAllData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <br></br>
      <form>{getStepContent(activeStep)}</form>
      {activeStep === 5 ? (
        <Typography variant="h3" align="center">
          Form submitted Successfully
        </Typography>
      ) : (
        <>
          <button
            className="btn"
            type="button"
            disabled={activeStep === 0}
            onClick={handleBack}>
            Back
          </button>
        </>
      )}
      {activeStep === 0 ||
      activeStep === 1 ||
      activeStep === 2 ||
      activeStep === 3 ? (
        <>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </>
      ) : (
        <>
          {errors ? (
            <div>
              {/* <button onClick={handleSubmit} disabled>next</button> */}
              <button className="btn" onClick={handlesave}>
                Finish
              </button>
              {/* <button onClick={handleSubmit}></button> */}
            </div>
          ) : (
            <button className="btn" onClick={handleSubmit}>
              Finish
            </button>
          )}
        </>
      )}
    </div>
  );
};
export default FlightBookingForm;
