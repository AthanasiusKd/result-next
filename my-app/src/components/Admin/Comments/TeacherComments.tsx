import { useState } from 'react';
import EditableTable from './EditableTable';
import Comments from '@/db/Comments';

function TeacherComments () {
  const [data, setData] = useState(Comments);
  function updateData (newData: any) {
    setData(newData);
  };

  return (
    <div>
      <h2>List of Comments</h2>
      <EditableTable data={data} updateData={updateData} />
    </div>
  );
};

export default TeacherComments;
