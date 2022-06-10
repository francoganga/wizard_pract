import create from "zustand";
import { devtools } from 'zustand/middleware'

type State = {
  step: number;
  steps: string[];
  formState: {
    name: string;
    apellido: string;
  };
  setFormState: (values: {name: string; apellido: string}) => void;
  setSteps: (steps: string[]) => void;
  goNext: () => void;
}

export const useStore = create<State>()(devtools((set) => ({
  step: 0,
  steps: [],
  formState: {
    name: "",
    apellido: "",
  },
  setFormState: (values: {name: string; apellido: string}) => set(() => ({
      formState: values
  })),
  setSteps: (steps: string[]) => set(() => ({
    steps
  })),
  goNext: () => set(state => {

    if (state.step >= 0 && state.step < state.steps.length - 1) {
      return {step: state.step + 1}
    }

    return state
  })
})));
