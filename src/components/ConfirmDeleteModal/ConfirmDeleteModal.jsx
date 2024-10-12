import styles from "./ConfirmDeleteModal.module.css";

const ConfirmDeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.modal}>
      <p>Are you sure you want to delete this contact?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default ConfirmDeleteModal;
