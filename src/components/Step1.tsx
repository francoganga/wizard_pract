import { useForm } from "react-hook-form";

export function Step1() {
  type FormData = {
    name: string;
    apellido: string;
    email: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="row mb-5">
        <div class="col-12 col-md-6">
          <label for="name">Nombre</label>
          <input
            {...register("name", { required: true })}
            class={`form-control ${errors.name?.type === "required" &&
              "is-invalid"}`}
            type="text"
          />
          <small class="text-danger my-1">
            {errors.name?.type === "required" && "Nombre es requerido"}
          </small>
        </div>
        <div class="col-12 col-md-6">
          <label for="apellido">Apellido</label>
          <input
            {...register("apellido", { required: true })}
            class={`form-control ${errors.apellido?.type === "required" &&
              "is-invalid"}`}
            type="text"
          />
          <small class="text-danger my-1">
            {errors.apellido?.type === "required" && "Apellido es requerido"}
          </small>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <label for="email">Correo Electrónico</label>
          <input
            {...register("email", { required: true })}
            class={`form-control ${errors.email?.type === "required" &&
              "is-invalid"}`}
            type="email"
          />
          <small class="text-danger my-1">
            {errors.email?.type === "required" && "Email es requerido"}
          </small>
        </div>
      </div>
      <div class="d-flex">
        <button class="btn btn-primary ms-auto">Siguiente</button>
      </div>
    </form>
  );
}
