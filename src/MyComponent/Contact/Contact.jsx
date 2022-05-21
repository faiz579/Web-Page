import React from "react";
import "./Contact.css";
import { useState } from "react";
import Detail from "./Detail";

const Contact = () => {
  // const [fname, setfname] = useState("");
  // const [lname, setlname] = useState("");
  // const [country, setcountry] = useState("India");
  // const [txt, settxt] = useState("");
  const [data, setData] = useState({
    fname: "",
    lname: "",
    country: "India",
    txt: "",
  });
  const onChangeHandler = (name, val) => {
    setData((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const [details, setdetails] = useState(false);
  const onSubmitHandler = () => {
    setdetails(true);
    // console.log(setdetails(<Detail data={data} />));
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="column">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitHandler();
                console.log(data);
              }}
            >
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="fname"
                placeholder="Your name.."
                value={data?.fname}
                onChange={(e) => onChangeHandler("fname", e.target.value)}
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lname"
                placeholder="Your last name.."
                value={data?.lname}
                onChange={(e) => onChangeHandler("lname", e.target.value)}
              />
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                value={data?.country}
                onChange={(e) => onChangeHandler("country", e.target.value)}
              >
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
              </select>
              <label htmlFor="subject">Subject</label>
              <textarea
                name="subject"
                value={data?.txt}
                onChange={(e) => onChangeHandler("txt", e.target.value)}
                id="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>

              <div className="submit-button">
                <input
                  type="submit"
                  value="Submit"
                  // onSubmit={onSubmitHandler}
                />
                <div className="detail-page">
                  {details === false ? "" : <Detail data={data} />}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// setData(prevState => ({
//   ...prevState,
// }))
