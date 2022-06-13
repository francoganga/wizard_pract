import { useEffect } from "preact/hooks";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { StepInfo } from "./components/step-info";
import { useStore } from "./stores/state";

export function App() {
  const steps = [
    "Datos Personales",
    "Detalle de Contrato",
    "Materias",
    "Observaciones",
  ];

  // const goNext = () => {
  //   if (step >= 0 && step < steps.length - 1) {
  //     setStep(step + 1);
  //   }
  // };
  //
  // const goBack = () => {
  //   if (step > 0 && step < steps.length) {
  //     setStep(step - 1);
  //   }
  // };

  const { setSteps, step, formState } = useStore((state) => state.wizardState);

  useEffect(() => {
    console.log("setting stesp");
    setSteps(steps);
  }, []);

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
                <div
                  class="step-1"
                  style={{ display: step === 0 ? "block" : "none" }}
                >
                  <Step1 />
                </div>
                {step == 1 && <Step2 />}
                {step == 2 && <div class="step-1 h-100">este es el paso 3</div>}
                {step == 3 && <div class="step-1 h-100">este es el paso 4</div>}
              </form>
              {/*

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
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
