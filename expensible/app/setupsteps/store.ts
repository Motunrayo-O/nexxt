import { create } from "zustand";

interface SetupStore {
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  userAnswers: {};
}

const useSetupStore = create<SetupStore>((set) => ({
  currentStep: 0,
  nextStep: () => set((store) => ({ currentStep: store.currentStep + 1 })),
  previousStep: () => set((store) => ({ currentStep: store.currentStep - 1 })),
  userAnswers: {},
}));

export default useSetupStore;
