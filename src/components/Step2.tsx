import { useForm } from "react-hook-form";
import { useStore } from "../stores/state";

export function Step2() {
  type FormData = {
    name: string;
    apellido: string;
    email: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { setFormState, goNext } = useStore(({ setFormState, goNext }) => ({
    setFormState,
    goNext,
  }));

  const onSubmit = (data: FormData) => {
    setFormState(data);
    goNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="ano-presupuestario">Año Presupuestario</label>
      <input
        id="ano-presupuestario"
        class="form-control"
        type="number"
        value={new Date().getFullYear()}
      />

      <div class="d-flex my-3">
        <button class="btn btn-primary ms-auto">Continuar</button>
      </div>
    </form>
  );
}
