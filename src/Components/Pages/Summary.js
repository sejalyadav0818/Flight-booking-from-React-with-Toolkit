import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
console.log(id);
  const dataa = JSON.parse(localStorage.getItem("allData"));
  const [data, setData] = useState(dataa);
console.log(data);

  const [filteredData, setFiltterData] = useState([]);

  useEffect(() => {
    console.log(data);
    if (data) {
      const filtered = data.find((index) => {
        console.log(index);
        return index.id === id;
      });
      setFiltterData(filtered);
    } else {
      setFiltterData(data);
    }
  }, [data,id]);

  return (
    <div className="container">
      <h1>
        <center>Flight Schedule</center>
      </h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Flight No</th>
            <th scope="col">Airline Name</th>
            <th scope="col">TripType</th>
            <th scope="col">Departure Airport</th>
            <th scope="col">Arrived Airport</th>
            <th scope="col">Departure Date</th>
            <th scope="col">Return Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            {console.log(filteredData)}
            <td>
              {filteredData.flightSchedule?.flightNo 
                }
            </td>
            <td>
              {filteredData.flightSchedule?.airlineName }
            </td>
            <td>
              {filteredData.flightSchedule?.tripType }
            </td>
            <td>
              {filteredData.flightSchedule?.departureAirport }
            </td>
            <td>
              {filteredData.flightSchedule?.arrivedAirport }
            </td>
            <td>
              {filteredData.flightSchedule?.departureDate }
            </td>
            <td>
              {filteredData.flightSchedule?.returnDate }
            </td>
          </tr>
        </tbody>
      </table>
      <h1>
        <center>Ticket Purchase</center>
      </h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FullName</th>
            <th scope="col">Cardnumber</th>
            <th scope="col">Payment DateTime</th>
            <th scope="col">Phone</th>
            <th scope="col">Month</th>
            <th scope="col">CVV</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{id}</td>
            <td>
              {filteredData.ticketPurchase?.fullName }
            </td>
            <td>
              {filteredData.ticketPurchase?.cardnumber }
            </td>{" "}
            <td>
              {filteredData.ticketPurchase?.paymentDateTime}
            </td>{" "}
            <td>
              {filteredData.ticketPurchase?.Phone }
            </td>{" "}
            <td>
              {filteredData.ticketPurchase?.month }
            </td>{" "}
            <td>
              {filteredData.ticketPurchase?.cvv }
            </td>{" "}
          </tr>
        </tbody>
      </table>
      <h1>
        <center>GST Details</center>
      </h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">GST No</th>
            <th scope="col">Company Name</th>
            <th scope="col">Company City</th>
            <th scope="col">Company State</th>
            <th scope="col">Company ZipCode</th>
            <th scope="col">Company Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>
              {filteredData.gstDetails?.gstNumber }
            </td>
            <td>
              {filteredData.gstDetails?.companyName }
            </td>
            <td>
              {filteredData.gstDetails?.companyaddress.companyCity }
            </td>
            <td>
              {filteredData.gstDetails?.companyaddress.companyState }
            </td>
            <td>
              {filteredData.gstDetails?.companyaddress.companyZipcode }
            </td>
            <td>
              {filteredData.gstDetails?.companyID }
            </td>
          </tr>
        </tbody>
      </table>
      <h1>
        <center>Contact Information</center>
      </h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Phone</th>
            <th scope="col">Emergency Contact Number</th>
            <th scope="col">Emergency Contact Name</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>
              {filteredData.contactInformation?.mobilePhone }
            </td>
            <td>
              {filteredData.contactInformation?.emergencyContactNumber }
            </td>
            <td>
              {filteredData.contactInformation?.emergencyContactName }
            </td>
    

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
