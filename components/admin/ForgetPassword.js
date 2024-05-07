"use client";

import Loading from "@/components/Loading";
import Modal from "@/components/ui/Modal";
import { useGASFetch } from "@/gasFetch";

export default function ForgetPassword() {
  const { data, isLoading, error } = useGASFetch(`/admin/forget-password`, {});
  return (
    <>
      {isLoading && <Loading />}

      {error && !isLoading && <p className="error text-center">{error}</p>}

      {data && (
        <Modal opened closeRoute={"/admin/login"}>
          <div className="text-center">
            <div className="img mb-4">
              <img src="/asset/img/verified.png" alt="Success" />
            </div>
            <h3 className="modal-title text-center">Success!</h3>
            <p>Please Check Your Email.</p>
          </div>
        </Modal>
      )}
    </>
  );
}
