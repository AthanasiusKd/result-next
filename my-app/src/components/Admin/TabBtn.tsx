'use client'

interface Props {
  title: string,
  caseNumber: string,
  handleClick: (caseNumber: string) => void

}

export default function TabBtn(props: Props) {
  return (
    <button
      className="btn tab-btns"
      type="button"
      onClick={() => props.handleClick(props.caseNumber)}
    >
      {props.title}
    </button>
  );
}
