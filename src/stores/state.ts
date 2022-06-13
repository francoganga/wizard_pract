import create from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  wizardState: {
    step: number;
    steps: string[];
    hasPrev: boolean;
    formState: {
      name: string;
      apellido: string;
      year: number | null;
      fechaDesde: string;
      fechaHasta: string;
    };
    setFormState: (values: { name: string; apellido: string }) => void;
    setSteps: (steps: string[]) => void;
    setStep: (step: number) => void;
    goNext: () => void;
  };
};

export const useStore = create<State>()(
  devtools((set) => ({
    wizardState: {
      step: 0,
      steps: [],
      hasPrev: false,
      formState: {
        name: "",
        apellido: "",
        year: null,
        fechaDesde: "",
        fechaHasta: "",
      },
      setFormState: (values: { name: string; apellido: string }) =>
        set((state) => {
          const formState = state.wizardState.formState;

          const newValues = { ...formState, values };

          return {
            wizardState: { ...state.wizardState, formState: newValues },
          };
        }),
      setSteps: (steps: string[]) =>
        set((state) => ({
          wizardState: {
            ...state.wizardState,
            steps,
          },
        })),
      setStep: (step: number) =>
        set((state) => ({
          wizardState: {
            ...state.wizardState,
            step,
          },
        })),
      goNext: () =>
        set((state) => {
          if (
            state.wizardState.step >= 0 &&
            state.wizardState.step < state.wizardState.steps.length - 1
          ) {
            return {
              wizardState: {
                ...state.wizardState,
                step: state.wizardState.step + 1,
                hasPrev: state.wizardState.step + 1 > 0,
              },
            };
          }

          return state;
        }),
    },
  }))
);
