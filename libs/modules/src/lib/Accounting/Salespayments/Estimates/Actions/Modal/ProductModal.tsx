import React from 'react';

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose }) => {
  return (
    // <Modal
    //   open={isOpen}
    //   onClose={onClose}
    //   aria-labelledby="modal-title"
    //   aria-describedby="modal-description"
    // >
    //   <ModalContent>
    //     <h2 id="modal-title" style={{ padding: 30 }}>
    //       Add Product
    //     </h2>
    //     <p style={{ padding: 10 }}>Coming Soon</p>
    //     <StyledButton variant="contained" onClick={onClose}>
    //       Close
    //     </StyledButton>
    //   </ModalContent>
    // </Modal>
    <>ss</>
  );
};

export default ProductModal;
