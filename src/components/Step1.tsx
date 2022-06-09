import { useForm } from "react-hook-form";
import { useStore } from "../stores/state";

type FormData = {
  name: string;
  apellido: string;
};

export function Step1() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const setFormState = useStore((state) => state.setFormState);

  const onSubmit = (data: FormData) => {
    setFormState(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-3">
        <div class="row">
          <div class="col-12 col-md-6">
            <label for="name">Nombre</label>
            <input
              {...register("name", { required: true })}
              id="name"
              class="form-control"
              type="text"
            />
            {errors.name?.type === "required" && "Nombre es requiredio"}
          </div>
          <div class="col-12 col-md-6">
            <label for="apellido">Apellido</label>
            <input
              {...register("apellido", { required: true })}
              class="form-control"
              id="apellido"
              type="text"
            />
            {errors.apellido?.type === "required" && "Apellido es requiredio"}
          </div>
        </div>
      </div>
      <div class="d-flex">
        <button class="btn btn-primary ms-auto">Continuar</button>
      </div>
    </form>
  );
}
