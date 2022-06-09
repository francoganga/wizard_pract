import { useState, useRef } from "preact/hooks";
import { Step1, Step2 } from "./components/Step1";
import { StepInfo } from "./components/step-info";
import { useForm } from "react-hook-form";
import { Router, Route } from "preact-router";
import { useStore } from "./stores/state";

export function App() {
  const steps = [
    "Datos Personales",
    "Detalle de Contrato",
    "Materias",
    "Observaciones",
  ];

  const { step, formState } = useStore((state) => ({
    step: state.step,
    formState: state.formState,
  }));

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
              <Router>
                <Route path="/" component={Step1}></Route>
              </Router>
            </div>
          </div>
          <h1>name: {formState.name}</h1>
        </div>
      </div>
    </>
  );
}
