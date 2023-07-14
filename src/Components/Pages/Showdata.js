import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletee } from "../../redux/FlightDataSlice";
const Showdata = () => {
  const dispatch = useDispatch();
  const dataa = JSON.parse(localStorage.getItem("allData"));
  const [data, setData] = useState(dataa);
console.log("codddddddddddddddddd",data);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2);
  useEffect(() => {
    const storedData = localStorage.getItem("allData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
 
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => {
    console.log(item);
    const firstname =
      item.basicDetails?.firstname ;
    const lastname = item.basicDetails?.lastname;
    const email = item.basicDetails?.email ;
    const phone = item.basicDetails?.phone;
    const address =
      item.basicDetails?.address ;
    const searchValue = searchTerm.toLowerCase();
    return (
      firstname?.toLowerCase().includes(searchValue) ||
      lastname?.toLowerCase().includes(searchValue) ||
      email?.toLowerCase().includes(searchValue) ||
      phone?.includes(searchTerm) ||
      address?.city.includes(searchTerm) ||
      address?.state.includes(searchTerm)
    );
  });

  filteredData.sort((a, b) => {
    if (sortConfig.direction === "ascending") {
      if (a.basicDetails[sortConfig.key] < b.basicDetails[sortConfig.key]) {
        return -1;
      }
      if (a.basicDetails[sortConfig.key] > b.basicDetails[sortConfig.key]) {
        return 1;
      }
      return 0;
    } else if (sortConfig.direction === "descending") {
      if (a.basicDetails[sortConfig.key] > b.basicDetails[sortConfig.key]) {
        return -1;
      }
      if (a.basicDetails[sortConfig.key] < b.basicDetails[sortConfig.key]) {
        return 1;
      }
      return 0;
    }
    return 0;
  });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
console.log(currentRecords || currentRecords[0]);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  };

  // const handleDelete = (index) => {
  //   console.log(index);
  //   const updatedData = [...data];
  //   updatedData.splice(index, 1);
  //   setData(updatedData);
  //   localStorage.setItem("allData", JSON.stringify(updatedData));
  // };
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deletee(id));

  };

  // const editData = (index) => {
  //    console.log(indm
  //   const updatedData = [...allData];
  //   console.log(updatedData);
  //   updatedData.splice(index, 1);
  //   setData(updatedData);
  // };
  // const editData = (index) => {
  //   console.log(index);
  //   const updatedData = [...allData];
  //   console.log(updatedData);
  //   updatedData.splice(index, 1);
  //   setData(updatedData);
  // }

  // // const id = index + 1;

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th>Image</th>
            <th scope="col" onClick={() => handleSort("firstname")}>
              Firstname
              {sortConfig.key === "firstname" && (
                <span>{sortConfig.direction === "ascending" ? "▲" : "▼"}</span>
              )}
            </th>
            <th scope="col" onClick={() => handleSort("lastname")}>
              Lastname
              {sortConfig.key === "lastname" && (
                <span>{sortConfig.direction === "ascending" ? "▲" : "▼"}</span>
              )}
            </th>
            <th scope="col" onClick={() => handleSort("email")}>
              Email
              {sortConfig.key === "email" && (
                <span>{sortConfig.direction === "ascending" ? "▲" : "▼"}</span>
              )}
            </th>
            <th scope="col" onClick={() => handleSort("phone")}>
              Phone
              {sortConfig.key === "phone" && (
                <span>{sortConfig.direction === "ascending" ? "▲" : "▼"}</span>
              )}
            </th>
            <th scope="col" onClick={() => handleSort("state")}>
              Street
              {sortConfig.key === "state" && (
                <span>{sortConfig.direction === "ascending" ? "▲" : "▼"}</span>
              )}
            </th>
            <th scope="col" onClick={() => handleSort("city")}>
              State
              {sortConfig.key === "city" && (
                <span>{sortConfig.direction === "ascending" ? "▲" : "▼"}</span>
              )}
            </th>
            <th scope="col"> City</th>
            <th scope="col">Zip</th>
            <th scope="col">Gender</th>
            <th scope="col" colSpan={3}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log(currentRecords)}

          {currentRecords.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>
                <img
                  src={item.basicDetails?.picture}
                  alt="pict"
                  style={{ height: 40, width: 40 }}
                />
              </td>
              <td>
                {item.basicDetails?.firstname ||
                  item[0].basicDetails?.firstname}
              </td>
              <td>{item.basicDetails?.lastname}</td>
              <td>{item.basicDetails?.email}</td>
              <td>{item.basicDetails?.phone}</td>
              <td>{item.basicDetails?.address.street}</td>
              <td>{item.basicDetails?.address.state}</td>
              <td>{item.basicDetails?.address.city}</td>
              <td>{item.basicDetails?.address.zipCode}</td>
              <td>{item.basicDetails?.gender}</td>
              <td>
                <button class="btn btn-dark">
                  <Link
                    to={
                      Array.isArray(item)
                        ? `/?id=${item.id}`
                        : `/?id=${item.id}`
                    }>
                    {" "}
                    Edit{" "}
                  </Link>
                </button>
              </td>{" "}
              <td>
                <button
                  class="btn btn-danger"
                  onClick={() =>
                    handleDelete(Array.isArray(item) ? item.id : item.id)
                  }>
                  Delete
                </button>
              </td>
              <td>
                <button className="btn btn-info">
                  <Link
                    to={
                      Array.isArray(item)
                        ? `/summary?id=${item.id}`
                        : `/summary?id=${item.id}`
                    }>
                    view
                  </Link>
                </button>

                {/* <button class="btn btn-info">
                  <Link
                    to={
                      `/summary?id=${item.id}` || `/summary?id=${item[0].id}`
                    }>
                    view
                  </Link>
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <ul>
          {Array.from({
            length: Math.ceil(filteredData.length / recordsPerPage),
          }).map((_, index) => (
            <li
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => paginate(index + 1)}>
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Showdata;
