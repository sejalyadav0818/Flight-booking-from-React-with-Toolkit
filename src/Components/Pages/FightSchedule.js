import React from "react";
import InputField from "../Controls/InputField";
import Dropdown from "../Controls/Dropdown";
import CheckboxGroup from "../Controls/CheckboxGroup";
import {
  seatClassOptions,
  airlineOptions,
  tripOptions,
} from "../Options/options";
import "../../assets/style.css";
const FlightSchedule = (props) => {
  return (
    <div>

      <InputField
        label="Flight Number"
        name="flightNo"
        value={props.flightSchedule["flightNo"]}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            flightNo: e.target.value,
          }));
        }}
        error={props.errors.flightNo}
      />

      <Dropdown
        name="airlineName"
        label="Airline Name:"
        options={airlineOptions}
        value={props.flightSchedule.airlineName}
        onChange={(selectedOptionone) =>
          props.setFlightSchedule((prevState) => ({
            ...prevState,
            airlineName: selectedOptionone,
          }))
        }
        error={props.errors.airlineName}
      />
<br></br><br></br>
      <Dropdown
        name="tripType"
        label="Trip Type:"
        options={tripOptions}
        selectedOption={props.flightSchedule.tripType}
        onChange={(selectedOptiontwo) =>
          props.setFlightSchedule((prevState) => ({
            ...prevState,
            tripType: selectedOptiontwo,
          }))
        }
        error={props.errors.tripType}
      /><br></br><br></br>
      <label>Seat Class</label>
      <CheckboxGroup
        label="Seat Class"
        options={seatClassOptions}
        selectedValues={props.flightSchedule.seatClass}
        onChange={(selectedValues) =>
          props.setFlightSchedule((prevState) => ({
            ...prevState,
            seatClass: selectedValues,
          }))
        }
        error={props.errors.seatClass}
      /><br></br><br></br>
      <InputField
        name="departureAirport"
        label="Departure Airport"
        value={props.flightSchedule.departureAirport}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            departureAirport: e.target.value,
          }));
        }}
        error={props.errors.departureAirport}
      /><br></br><br></br>
      <InputField
        label="Arrived Airport"
        name="arrivedAirport"
        value={props.flightSchedule.arrivedAirport}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            arrivedAirport: e.target.value,
          }));
        }}
        error={props.errors.arrivedAirport}
      />
 <InputField
        label="Return Date:"
        type="date"
        name="returnDate"
        value={props.flightSchedule.returnDate}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            returnDate: e.target.value,
          }));
        }}
        error={props.errors.returnDate}
      />
      <InputField
        label="Departure Date"
        type="date"
        name="departureDate"
        value={props.flightSchedule.departureDate}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            departureDate: e.target.value,
          }));
        }}
        error={props.errors.departureDate}
      />
     
    </div>
  );
};

export default FlightSchedule;
