import { ChangeEvent, FormEvent, useState } from "react";
import SmallForm from "../SmallForm";
import EditableTable from "./EditableTable";
import SubjectList from "@/db/SubjectList";

export default function Subjects() {
  const [data, setData] = useState(SubjectList);
  function updateData(newData: any) {
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
            updateData={updateData}
            arm={newValues.arm}
            classTitle={newValues.class}
          />
        ) : null}
      </div>
    </>
  );
}
