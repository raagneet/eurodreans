"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isLoginOpen: boolean;
  isBookCallOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  openBookCall: () => void;
  closeBookCall: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isLoginOpen,
        isBookCallOpen,
        openLogin: () => setIsLoginOpen(true),
        closeLogin: () => setIsLoginOpen(false),
        openBookCall: () => setIsBookCallOpen(true),
        closeBookCall: () => setIsBookCallOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
