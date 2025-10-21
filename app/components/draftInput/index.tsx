import type { FC } from "react";
import DraftPoint from "./draftPoint";

interface Props {
  state: 'Initial'|'Intermeddle'|'Final';
}

const DraftInput:FC<Props> = ({
  state
}) => {
  return (
    <section className="">
      <h2>{state}</h2>
      <div className="">
        <DraftPoint position="Fore"/>
        <DraftPoint position="Mid"/>
        <DraftPoint position="Aft"/>
      </div>
    </section>
  )
}

export default DraftInput;