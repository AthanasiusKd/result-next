import { ChangeEvent, FormEvent, useState } from "react";
import SmallForm from "../SmallForm";
import EditableTable from './EditableTable';
import NameList from "@/db/NameList";
import axios from "axios";

export default function EntrySheet() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const myData = axios.get(url).then(response => {
    response
  })
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
      <p>{newValues.class}</p>
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
