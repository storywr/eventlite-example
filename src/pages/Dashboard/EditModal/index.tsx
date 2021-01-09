import React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import { Event } from '../'
import EditForm from './EditForm'

interface Props {
  event: Event
  isOpen: any
  onClose: any
}

const EditModal = ({ event, isOpen, onClose }: Props) => (
  <Modal onClose={onClose} size='xl' isOpen={isOpen}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Edit Event</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <EditForm event={event} variantColor='teal' />
      </ModalBody>
    </ModalContent>
  </Modal>
)

export default EditModal