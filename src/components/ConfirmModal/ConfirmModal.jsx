import styles from "./ConfirmModal.module.css";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h2>Are you sure you want to delete this contact?</h2>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
