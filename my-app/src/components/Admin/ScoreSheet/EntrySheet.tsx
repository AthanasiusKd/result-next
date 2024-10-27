import { ChangeEvent, FormEvent, useState } from "react";
import SmallForm from "../SmallForm";
import EditableTable from './TableComponent';
import NameList from "@/db/NameList";

export default function EntrySheet() {
  const [data, setData] = useState(NameList);

  const [formValues, setFormValues] = useState({
    class: "",
    arm: "",
  });
  function handleInput(event: ChangeEvent<HTMLSelectElement>) {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  }

  const [showTable, setShowTable] = useState(false);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setNewValues(formValues);
    setShowTable(true);
  }

  const [newValues, setNewValues] = useState({
    class: '',
    arm: ''
  });

  return (
    <>
      <SmallForm
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        class={formValues.class}
        arm={formValues.arm}
      />
      <div>
        {showTable ? (
          <EditableTable
            data={data}
            arm={newValues.arm}
            classTitle={newValues.class}
          />
        ) : null}
      </div>
    </>
  );
}
