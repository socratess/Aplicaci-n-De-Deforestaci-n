import { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';

function ConfirmacionModal({showConfirmarModal,handleClose,handleConfirm,mensaje}) {
 
  return (
      <Modal show={showConfirmarModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mensaje}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ConfirmacionModal;