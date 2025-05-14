import { create } from "zustand";

type DeviceState = {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
};

export const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: typeof window !== "undefined" && window.innerWidth < 768,
  setIsMobile: (value) => set({ isMobile: value }),
}));
