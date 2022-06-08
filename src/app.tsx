import { useState } from "preact/hooks";
import { Step1, Step2 } from "./components/Step1";
import { StepInfo } from "./components/step-info";

export function App() {
  const [step, setStep] = useState(0);

  const steps = [
    "Datos Personales",
    "Detalle de Contrato",
    "Materias",
    "Observaciones",
  ];

  const goNext = () => {
    if (step >= 0 && step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const goBack = () => {
    if (step > 0 && step < steps.length) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <div class="container my-5">
        <div class="form d-flex flex-column">
          <h3>Solicitud de contratacion</h3>
          <div class="card mb-3">
            <div class="card-body p-4">
              <StepInfo active={step + 1} options={steps} />
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <form class="mb-3">
                {step == 0 && (
                  <div class="step-1">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <label for="name">Nombre</label>
                        <input id="name" class="form-control" type="text" />
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="apellido">Apellido</label>
                        <input class="form-control" id="apellido" type="text" />
                      </div>
                    </div>
                  </div>
                )}
                {step == 1 && <div class="step-1 h-100">este es el paso 2</div>}
                {step == 2 && <div class="step-1 h-100">este es el paso 3</div>}
                {step == 3 && <div class="step-1 h-100">este es el paso 4</div>}
              </form>
              <div class="d-flex">
                {step >= 1 && (
                  <button onClick={goBack} class="btn btn-primary">
                    Back
                  </button>
                )}
                {step != steps.length - 1 && (
                  <button onClick={goNext} class="btn btn-primary ms-auto">
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
