import AskModal from "../common/AskModal";

const AskClearSkrapModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="스크랩 해제"
      description="스크랩을 해제하시겠습니까?"
      confirmText="해제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskClearSkrapModal;
