"use client";

import Header from "@/components/user/Header";
import { useState } from "react";

export default function Home() {
  function getDateFormat(date_) {
    let date = date_;

    if (!date_) date = new Date();

    if (typeof date === "string") date = new Date(date_);

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
  }

  const [state, setState] = useState({
    date: getDateFormat(),
    name: "",
    email: "",
    dob: "",
    amount: "",
    receivedBy: "",
    files: [],
    paymentMethod: "",
    lastFourDigit: "",
  });

  function setCaretPosition(e, pos) {
    // Modern browsers
    if (e.setSelectionRange) {
      e.focus();
      e.setSelectionRange(pos, pos);

      // IE8 and below
    } else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  const preventInput = (e) => {
    if (
      e.nativeEvent.inputType == "insertText" ||
      e.nativeEvent.inputType == "insertCompositionText"
    ) {
      let start =
        e.nativeEvent.target.selectionStart - e.nativeEvent.data.length;
      e.nativeEvent.target.value =
        e.nativeEvent.target.value.substr(
          0,
          e.nativeEvent.target.selectionStart - e.nativeEvent.data.length
        ) +
        e.nativeEvent.target.value.substr(e.nativeEvent.target.selectionStart);
      setCaretPosition(e.nativeEvent.target, start);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      <section id="wrapper">
        <Header />

        <main className="site-main">
          <section className="common-sec">
            <div className="container-fluid">
              <form onSubmit={handleSubmit} id="secure-message-form">
                <div className="row">
                  <div className="col-md-5">
                    <div className="user-send-email-wrapp">
                      <div className="mdl-input-bx">
                        <label>Date</label>
                        <input
                          disabled
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          value={state.date}
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Name</label>
                        <input
                          type="text"
                          value={state.name}
                          onChange={(e) =>
                            setState({ ...state, name: e.target.value })
                          }
                          onInput={preventInput}
                          className="form-control"
                          autoComplete="off"
                          required
                          placeholder="Copy & paste only"
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Email</label>
                        <input
                          type="text"
                          value={state.email}
                          onChange={(e) =>
                            setState({ ...state, email: e.target.value })
                          }
                          onInput={preventInput}
                          className="form-control"
                          autoComplete="off"
                          required
                          placeholder="Copy & paste only"
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Date Of Birth</label>
                        <input
                          type="text"
                          value={state.dob}
                          onChange={(e) =>
                            setState({ ...state, dob: e.target.value })
                          }
                          onInput={preventInput}
                          className="form-control"
                          autoComplete="off"
                          required
                          placeholder="Copy & paste only"
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Amount</label>
                        <input
                          type="text"
                          value={state.amount}
                          onChange={(e) =>
                            setState({ ...state, amount: e.target.value })
                          }
                          className="form-control"
                          autoComplete="off"
                          required
                          placeholder="Enter Amount"
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Received By (Initial Only)</label>
                        <input
                          type="text"
                          value={state.receivedBy}
                          onChange={(e) =>
                            setState({ ...state, receivedBy: e.target.value })
                          }
                          className="form-control"
                          autoComplete="off"
                          required
                          placeholder="Enter Initial"
                        />
                      </div>
                    </div>
                    {/* user-send-email-wrapp */}
                  </div>
                  {/* col */}
                  <div className="col-md-7">
                    <div className="drop-upload-check-wrapp h-100">
                      <label htmlFor="drop-zone__input" className="drop-zone">
                        {state.files.length == 0 && (
                          <div className="drop-zone__prompt">
                            <h3>Drag &amp; Drop Files Here To Share</h3>
                            <p>
                              Upto 10 PDF or Image Files ONLY. less than 5 Mb
                              total
                            </p>
                            <div className="img">
                              <img
                                src="/asset/img/cloud-computing.png"
                                alt="Upload"
                              />
                            </div>
                          </div>
                        )}
                        {state.files.length > 0 &&
                          Array.from(state.files)
                            .slice(0, 10)
                            .map((file, index) => (
                              <div
                                key={index}
                                className="drop-zone__thumb"
                                data-label={file.name}
                              ></div>
                            ))}
                        <input
                          type="file"
                          name="myFile"
                          className="drop-zone__input"
                          multiple
                          accept="application/pdf,image/*"
                          onChange={(e) =>
                            setState({ ...state, files: e.target.files })
                          }
                          id="drop-zone__input"
                        />
                      </label>
                      {/* drop-zone */}
                      <div className="input-bx input-checkbox secure-message-checkbox">
                        <input
                          type="checkbox"
                          checked={state.paymentMethod === "Cash"}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setState({
                                ...state,
                                paymentMethod: "Cash",
                                lastFourDigit: "",
                              });
                            } else {
                              setState({
                                ...state,
                                paymentMethod: "",
                                lastFourDigit: "",
                              });
                            }
                          }}
                          required={state.paymentMethod === ""}
                          id="CashID"
                        />
                        <label htmlFor="CashID">Cash</label>
                      </div>
                      <div className="input-bx input-checkbox secure-message-checkbox">
                        <input
                          type="checkbox"
                          checked={state.paymentMethod === "Debit/Credit Card"}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setState({
                                ...state,
                                paymentMethod: "Debit/Credit Card",
                                lastFourDigit: "",
                              });
                            } else {
                              setState({
                                ...state,
                                paymentMethod: "",
                                lastFourDigit: "",
                              });
                            }
                          }}
                          required={state.paymentMethod === ""}
                          id="CardID"
                        />
                        <label htmlFor="CardID">Debit/Credit Card</label>
                        {state.paymentMethod === "Debit/Credit Card" && (
                          <input
                            type="text"
                            className="checkText"
                            id="CardText"
                            value={state.lastFourDigit}
                            onChange={(e) =>
                              setState({
                                ...state,
                                lastFourDigit: e.target.value,
                              })
                            }
                            required
                            placeholder="# Last Four Digit"
                          />
                        )}
                      </div>
                      <div className="input-bx input-checkbox secure-message-checkbox">
                        <input
                          type="checkbox"
                          checked={state.paymentMethod === "Check"}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setState({
                                ...state,
                                paymentMethod: "Check",
                                lastFourDigit: "",
                              });
                            } else {
                              setState({
                                ...state,
                                paymentMethod: "",
                                lastFourDigit: "",
                              });
                            }
                          }}
                          required={state.paymentMethod === ""}
                          id="CheckID"
                        />
                        <label htmlFor="CheckID">Check</label>
                        {state.paymentMethod === "Check" && (
                          <input
                            type="text"
                            className="checkText"
                            id="CheckText"
                            value={state.lastFourDigit}
                            onChange={(e) =>
                              setState({
                                ...state,
                                lastFourDigit: e.target.value,
                              })
                            }
                            required
                            placeholder="# Check Number"
                          />
                        )}
                      </div>
                      <button type="submit" className="custom-btn">
                        Send
                      </button>
                    </div>
                  </div>
                  {/* col */}
                </div>
                {/* row */}
              </form>
            </div>
            {/* container */}
          </section>
          {/* common-sec */}
        </main>
      </section>
      {/* wrapper */}
    </>
  );
}
