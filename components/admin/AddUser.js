import Modal from "@/components/ui/Modal";

export default function AddUser() {
  return (
    <Modal opened closeRoute="/admin">
      <h3 className="modal-title text-center">Add New User</h3>
      <section className="custom-form-sec">
        <form className="icon-form" name="addUserForm">
          <div className="mdl-input-bx">
            <label>Email</label>
            <input
              type="text"
              name=""
              id="addUserEmail"
              className="form-control"
              autoComplete="off"
              required=""
              placeholder="Enter Email"
              spellCheck="false"
            />
          </div>
          <div className="mdl-input-bx">
            <label>Password</label>
            <input
              type="text"
              name=""
              id="addUserPass"
              className="form-control"
              autoComplete="off"
              required=""
              placeholder="Enter Password"
              spellCheck="false"
            />
          </div>
          <div className="mdl-input-bx">
            <label>History</label>
            <select
              name=""
              required=""
              className="form-control"
              id="addUserHistory"
            >
              <option value={0}>0 Days</option>
              <option value={7}>7 Days</option>
              <option value={30}>30 Days</option>
              <option value={90}>90 Days</option>
              <option value={180}>180 Days</option>
              <option value={365}>365 Days</option>
            </select>
          </div>
          <div className="mdl-input-bx">
            <label>IP Address (Optional)</label>
            <textarea
              name=""
              id="addUserIP"
              className="form-control"
              autoComplete="off"
              placeholder="Enter IP Address"
              spellCheck="false"
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            id="addUserBtn"
            className="custom-btn popSubmit"
          >
            Add
          </button>
          <div
            style={{
              color: "red",
              textAlign: "center",
              fontSize: 14,
              marginTop: 15,
              display: "none",
            }}
            id="adduser-error"
          >
            Please try again.
          </div>
          <div
            style={{
              color: "green",
              textAlign: "center",
              fontSize: 14,
              marginTop: 15,
              display: "none",
            }}
            id="adduser-success"
          >
            Success!
          </div>
        </form>
      </section>
    </Modal>
  );
}
