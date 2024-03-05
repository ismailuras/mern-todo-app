/* eslint-disable react/prop-types */
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function CustomModal({ isOpen, setIsOpen, title, children }) {
  const onCloseModal = () => setIsOpen(false);
  return (
    <div>
      <Modal open={isOpen} onClose={onCloseModal} center classNames={{ modal: "w-[500px]" }}>
        <h2>{title}</h2>
        <div>{children}</div>
      </Modal>
    </div>
  );
}
