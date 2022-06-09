import create from "zustand";

type State = {
  step: number;
  formState: {
    name: string;
    apellido: string;
  };
  setFormState: (values: {name: string; apellido: string}) => void;
}

export const useStore = create<State>((set) => ({
  step: 0,
  formState: {
    name: "",
    apellido: "",
  },
  setFormState: (values: {name: string; apellido: string}) => set(() => ({
      formState: values
  }))
}));
