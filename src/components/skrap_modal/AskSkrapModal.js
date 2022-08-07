import AskModal from "../common/AskModal";

const AskSkrapModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="스크랩 등록"
      description="스크랩을 등록하시겠습니까?"
      confirmText="등록"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskSkrapModal;
