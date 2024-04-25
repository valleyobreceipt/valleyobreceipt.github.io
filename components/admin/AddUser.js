import Modal from "@/components/ui/Modal";

export default function AddUser() {
  return (
    <Modal opened closeRoute="/admin">
      <h3 className="modal-title text-center">Add New User</h3>
      <section className="custom-form-sec">
        <form className="icon-form" action="" method="post">
          <div className="mdl-input-bx">
            <label>Email</label>
            <input
              type="text"
              name=""
              id=""
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              autoComplete="off"
              required=""
              placeholder="Enter Email"
            />
          </div>
          <div className="mdl-input-bx">
            <label>Password</label>
            <input
              type="password"
              name=""
              id=""
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              autoComplete="off"
              required=""
              placeholder="Enter Password"
            />
          </div>
          <div className="mdl-input-bx">
            <label>History</label>
            <select
              name=""
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              id=""
            >
              <option value="7-days">0 Days</option>
              <option value="7-days">7 Days</option>
              <option value="30-days">30 Days</option>
              <option value="90-days">90 Days</option>
              <option value="180-days">180 Days</option>
              <option value="365-days">365 Days</option>
            </select>
          </div>
          <div className="mdl-input-bx">
            <label>IP Address (Optional)</label>
            <input
              type="text"
              name=""
              id=""
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              autoComplete="off"
              placeholder="Enter IP Address"
            />
          </div>
          <button type="submit" className="custom-btn popSubmit">
            Add
          </button>
        </form>
      </section>
    </Modal>
  );
}
