import React, { createContext, useContext, useState } from 'react';

interface BookingModalContextType {
  isOpen: boolean;
  contextTitle: string;
  selectedVehicle: string;
  openModal: (title?: string, vehicle?: string) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const BookingModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contextTitle, setContextTitle] = useState('Plan Your Journey');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const openModal = (title = 'Plan Your Journey', vehicle = '') => {
    setContextTitle(title);
    setSelectedVehicle(vehicle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider value={{ isOpen, contextTitle, selectedVehicle, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider');
  }
  return context;
};
