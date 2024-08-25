export type DugmeType = "button" | "submit" | "reset";

export interface DugmeProps {
  text: string;
  clickHandler: () => void;
  type?: DugmeType;
}

const Dugme = ({ text, clickHandler, type = "button" }: DugmeProps) => {
  return (
    <button onClick={clickHandler} type={type}>
      {text}
    </button>
  );
};

export default Dugme;
