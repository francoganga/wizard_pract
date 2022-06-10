type Props = {
  options: string[];
  active: number;
};

export function StepInfo({ options, active }: Props) {
  return (
    <div class="step-info">
      <ul>
        {options.map((e, i) => 
            <li class={(i+1) == active ? 'step-active': 'step-inactive'}>
            <a role="tab">
            <span class="step-number">{i + 1}</span>
            <span class="step-label">{e}</span>
            </a>
            </li>
        )}
      </ul>
    </div>
  );
}
