import { create } from "zustand";

type GlobalModalState = {
  anyModalOpen: boolean;
  setAnyModalOpen: (open: boolean) => void;
};

export const useModalStore = create<GlobalModalState>((set) => ({
  anyModalOpen: false,
  setAnyModalOpen: (open) => set({ anyModalOpen: open }),
}));
