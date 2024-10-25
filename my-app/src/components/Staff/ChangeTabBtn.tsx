interface Props {
  text: string,
  nameClass: string,
  num: string,
  titles: string,
  functionName: (component: string, headText: string) => void
}

function TabBtn(props: Props) {
    return (
      <button
        onClick={() => props.functionName(props.num, props.titles)}
        className={props.nameClass}
        type="button"
      >
        Impute {props.text}
      </button>
    );
  }
  
  export default TabBtn;