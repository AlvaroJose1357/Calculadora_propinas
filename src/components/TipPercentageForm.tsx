const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipPercentageFormProps = {
  // se le asigna el valor React.Dispatch<React.SetStateAction<number>> debido a que es el tipo de la funcion setTip que infiere React
  // el dispatch dispara una accion para que el SetStateAction actualice el state
  setTip: React.Dispatch<React.SetStateAction<number>>;
};
export default function TipPercentageForm({ setTip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propinas</h3>
      <form>
        {tipOptions.map((tip) => (
          <div className="flex gap-2" key={tip.id}>
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              // se le coloca un evento onChange para que cuando se seleccione una opcion se envie el valor y se coloca el signo + para que el valor sea de tipo number y no string debido a que este es el tipo por defect que tiene el value y number debido a que este es lo que espera el setTip
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
