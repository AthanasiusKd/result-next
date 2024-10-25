import { ChangeEvent, FormEvent, useState } from "react";
import SmallForm from "../SmallForm";
import EditableTable from './EditableTable';
import NameList from "@/db/NameList";

export default function EntrySheet() {
  const [data, setData] = useState(NameList);
  function updateData(newData: {class: string, arm: string}) {
    setData(newData);
  }

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

  const [newValues, setNewValues] = useState([]);

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
            updateData={updateData}
            arm={newValues.arm}
            classTitle={newValues.class}
          />
        ) : null}
      </div>
    </>
  );
}
