import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useState } from "react";
import Modal from "../../ui/Modal.jsx";
import useLogout from "./useLogout.js";
import Loading from "../../ui/Loading.jsx";

function Logout() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, isPending } = useLogout();

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <button onClick={() => setIsOpen(true)}>
          <HiArrowRightOnRectangle className="w-6 h-6 text-secondary-600 hover:text-error" />
        </button>
      )}
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="خروج از حساب؟"
        >
          <div className="flex items-center justify-around">
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn--outline"
            >
              خیر
            </button>
            <button onClick={logout} className="btn btn--danger">
              بله
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Logout;
