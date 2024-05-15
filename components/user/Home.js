"use client";

import Header from "@/components/user/Header";
import createReceipt from "@/template/createReceipt";
import { useState } from "react";

export default function Home() {
  async function fileToBytes(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(new Uint8Array(reader.result));
      };

      reader.onerror = reject;

      reader.readAsArrayBuffer(file);
    });
  }

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
    error: "",
    success: "",
    loading: false,
    receipt: "",
    receiptID: "",
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

  const onlyNumberInput = (e) => {
    if (
      e.nativeEvent.inputType == "insertText" ||
      e.nativeEvent.inputType == "insertCompositionText"
    ) {
      if (!/^\d+$/.test(e.nativeEvent.data)) {
        let start = e.nativeEvent.target.selectionStart - 1;
        e.nativeEvent.target.value =
          e.nativeEvent.target.value.substr(0, start) +
          e.nativeEvent.target.value.substr(start + 1);
        setCaretPosition(e.nativeEvent.target, start);
      }
    }

    // if paste
    if (e.nativeEvent.inputType == "insertFromPaste") {
      let start = e.nativeEvent.target.selectionStart;
      e.nativeEvent.target.value = e.nativeEvent.target.value.replace(
        /\D/g,
        ""
      );
      setCaretPosition(e.nativeEvent.target, start);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setState((state) => {
        return { ...state, loading: true, error: "", success: "" };
      });

      if (!state.name) {
        throw new Error("Name is required");
      }

      if (!state.email) {
        throw new Error("Email is required");
      }

      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(state.email)) {
        throw new Error("Invalid Email");
      }

      if (!state.dob) {
        throw new Error("Date of Birth is required");
      }

      if (
        !/^(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])\-\d{4}$/.test(state.dob)
      ) {
        throw new Error("Invalid Date of Birth. It should be MM-DD-YYYY");
      }

      if (!state.amount) {
        throw new Error("Amount is required");
      }

      if (isNaN(state.amount)) {
        throw new Error("Invalid Amount. It should be a number");
      }

      if (!state.receivedBy) {
        throw new Error("Received By is required");
      }

      if (!isNaN(state.receivedBy)) {
        throw new Error("Invalid Received By. It should be a string");
      }

      if (!state.paymentMethod) {
        throw new Error("Payment Method is required");
      }

      if (
        ["Cash", "Debit/Credit Card", "Check"].indexOf(state.paymentMethod) ===
        -1
      ) {
        throw new Error(
          "Invalid Payment Method. It should be Cash, Debit/Credit Card or Check"
        );
      }

      if (
        state.paymentMethod === "Debit/Credit Card" &&
        !/^\d{4}$/.test(state.lastFourDigit)
      ) {
        throw new Error("Invalid Last Four Digit. It should be 4 digits");
      }

      if (
        state.paymentMethod === "Check" &&
        !/^\d+$/.test(state.lastFourDigit)
      ) {
        throw new Error("Invalid Check Number. It should be 4 digits");
      }

      let finalFiles = [];

      for (let i = 0; i < state.files.length; i++) {
        let type = state.files[i].type.includes("image") ? "img" : "pdf";
        let imgType = "jpg";

        if (state.files[i].type.split("/")[1] == "png") {
          imgType = "png";
        }

        let bytes = await fileToBytes(state.files[i]);

        finalFiles.push({ type, bytes, imgType });
      }

      let now = new Date();
      let receiptID = `${(now.getMonth() + 1).toString().padStart(2, "0")}${now
        .getDate()
        .toString()
        .padStart(2, "0")}${now.getFullYear().toString().substr(2, 2)}${now
        .getHours()
        .toString()
        .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}`;

      let receiptPdf = await createReceipt({
        receiptID: `${receiptID}${state.receivedBy.toUpperCase()}`,
        date: state.date,
        receivedBy: state.name,
        amount: `${state.amount}`,
        paymentMethod: `${state.paymentMethod}${
          state.paymentMethod != "Cash" ? ` #${state.lastFourDigit}` : ""
        }`,
        files: finalFiles,
      });

      // let receiptReq = await gasFetch("/user/send-receipt", {
      //   receiptID,
      //   date: state.date,
      //   name: state.name,
      //   email: state.email,
      //   dob: state.dob,
      //   amount: state.amount,
      //   receivedBy: state.receivedBy.toLocaleUpperCase(),
      //   paymentMethod: state.paymentMethod,
      //   lastFourDigit: state.lastFourDigit,
      //   pdf: receiptPdfBase64,
      // });

      let formData = new FormData();
      formData.append(
        "token",
        JSON.parse(localStorage.getItem(`userTokenInfo`)).token
      );
      formData.append("receiptID", receiptID);
      formData.append("date", state.date);
      formData.append("name", state.name);
      formData.append("email", state.email);
      formData.append("dob", state.dob);
      formData.append("amount", state.amount);
      formData.append("receivedBy", state.receivedBy.toUpperCase());
      formData.append("paymentMethod", state.paymentMethod);
      formData.append("lastFourDigit", state.lastFourDigit);
      formData.append(
        "pdf",
        new File(
          [receiptPdf],
          `Receipt #${receiptID}${state.receivedBy.toUpperCase()}.pdf`,
          { type: "application/pdf" }
        )
      );

      let receiptReq = await fetch(
        "https://api.valleyobreceipt.workers.dev/send",
        {
          method: "POST",
          body: formData,
        }
      );

      let receiptJSON = await receiptReq.json();

      if (receiptJSON.status) {
        setState((state) => {
          return {
            ...state,
            name: "",
            email: "",
            dob: "",
            amount: "",
            receivedBy: "",
            files: [],
            paymentMethod: "",
            lastFourDigit: "",
            receiptID: "",
            success: "Receipt Sent Successfully",
            loading: false,
          };
        });
      } else {
        throw new Error(receiptJSON.error);
      }
    } catch (error) {
      console.error(error);
      return setState((state) => {
        return {
          ...state,
          error: error.message,
          loading: false,
        };
      });
    }
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
                          disabled={state.loading}
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
                          disabled={state.loading}
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
                          disabled={state.loading}
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
                          onInput={onlyNumberInput}
                          className="form-control"
                          autoComplete="off"
                          required
                          placeholder="Enter Amount"
                          disabled={state.loading}
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Received By (Initial Only)</label>
                        <input
                          type="text"
                          maxLength={2}
                          value={state.receivedBy}
                          onChange={(e) =>
                            setState({ ...state, receivedBy: e.target.value })
                          }
                          className="form-control"
                          autoComplete="off"
                          required
                          placeholder="Enter Initial"
                          disabled={state.loading}
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
                              Upto 10 PDF or Image (png, jpg or jpeg) Files
                              ONLY. less than 5 Mb total
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
                          state.files.map((file, index) => (
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
                          accept="application/pdf,image/png,image/jpg,image/jpeg"
                          onChange={(e) => {
                            setState({
                              ...state,
                              files: Array.from(e.target.files)
                                .filter(
                                  (file) =>
                                    (file.type.includes("image/png") ||
                                      file.type.includes("image/jpg") ||
                                      file.type.includes("image/jpeg") ||
                                      file.type.includes("pdf")) &&
                                    file["size"] <= 5 * 1024 * 1024
                                )
                                .slice(0, 10),
                            });
                          }}
                          id="drop-zone__input"
                          disabled={state.loading}
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
                          disabled={state.loading}
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
                          disabled={state.loading}
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
                            onInput={onlyNumberInput}
                            maxLength={4}
                            required
                            placeholder="# Last Four Digit"
                            disabled={state.loading}
                            autoComplete="off"
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
                          disabled={state.loading}
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
                            onInput={onlyNumberInput}
                            maxLength={4}
                            placeholder="# Check Number"
                            disabled={state.loading}
                            autoComplete="off"
                          />
                        )}
                      </div>
                      {state.error && (
                        <p className="inline-status error mt-0 mb-4">
                          {state.error}
                        </p>
                      )}
                      {state.success && (
                        <p className="inline-status success mt-0 mb-4">
                          {state.success}
                        </p>
                      )}
                      <button
                        disabled={state.loading}
                        type="submit"
                        className="custom-btn"
                      >
                        {state.loading ? "Submitting..." : "Submit"}
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

        {state.receipt && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
            onClick={() => setState({ ...state, receipt: "" })}
          >
            <iframe
              src={`${state.receipt}`}
              style={{
                width: "80%",
                height: "80%",
                border: "none",
                backgroundColor: "#fff",
              }}
            ></iframe>
          </div>
        )}
      </section>
      {/* wrapper */}
    </>
  );
}
