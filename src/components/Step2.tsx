import { useForm } from "react-hook-form";
import { useStore } from "../stores/state";

export function Step2() {
  type FormData = {
    anoPresupuestario: number;
    fechaDesde: string;
    fechaHasta: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { setFormState, goNext, hasPrev, setStep, step } = useStore(
    (state) => state.wizardState
  );

  const onSubmit = (data: FormData) => {
    console.log(data);
    // setFormState(data);
    // goNext();
  };

  const volver = () => {
    setStep(step - 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="ano-presupuestario">Año Presupuestario</label>
      <input
        {...register("anoPresupuestario", { required: true })}
        id="ano-presupuestario"
        class={`form-control ${
          errors.anoPresupuestario?.type === "required" && "is-invalid"
        }`}
        type="number"
      />

      <small class="text-danger my-1">
        {errors.anoPresupuestario?.type === "required" && "Complete este campo"}
      </small>

      <div class="row">
        <div class="col-6">
          <label for="fechaDesde">Desde</label>
          <input
            {...register("fechaDesde", { required: true })}
            class="form-control"
            id="fechaDesde"
            type="date"
          />
        </div>

        <div class="col-6">
          <label for="fechaHasta">Hasta</label>
          <input
            {...register("fechaHasta", { required: true })}
            class="form-control"
            id="fechaHasta"
            type="date"
          />
        </div>
      </div>

      <div class="d-flex my-3">
        {hasPrev && (
          <button onClick={volver} type="button" class="btn btn-primary">
            Volver
          </button>
        )}
        <button class="btn btn-primary ms-auto">Continuar</button>
      </div>
    </form>
  );
}
