"use client"
import { useState } from "react";

interface UseModal {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

const useModal = (initialState: boolean = false): UseModal => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return { isOpen, openModal, closeModal, toggleModal };
};

export default useModal;