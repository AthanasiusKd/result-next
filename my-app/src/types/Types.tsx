export interface DataTableProps {
  updateData: (newData: any) => void;
  data: { id: number; text: string }[];
  classTitle: string;
  arm: string;
}
