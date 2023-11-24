import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import {
  DropZoneContainer,
  FileInput,
} from './Styling';
declare module 'xlsx' {
  interface Sheet2CSVOpts {
    header?: number;
  }
}
type DropZoneProps = {
  setHeaders: (headers: string[]) => void;
  setList:(list:string[])=> void;
  onFileSelected: (file: File) => void; 
  onFileRemoved: () => void;
};
const DropZone: React.FC<DropZoneProps> = ({ setHeaders,setList,onFileSelected, 
onFileRemoved, }) => {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<any[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const dropzone = useDropzone({
    accept: {
      'text': ['.csv'],
      'excel': ['.xls', '.xlsx'],
    }
  });
  const processData = (dataString: string) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers: string[] = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    const list: any[] = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length === headers.length) {
        const obj: { [key: string]: any } = {};
        headers.forEach((header, j) => {
          let d = row[j];
          if (d.length > 0 && d[0] === '"' && d[d.length - 1] === '"') {
            d = d.substring(1, d.length - 1);
          }
          obj[header] = d;
        });
        if (Object.values(obj).some((x) => x !== null && x !== undefined && x !== '')) {
          list.push(obj);
        }
      }
    }
    setData(list);
    setColumns(headers.map((c) => ({ name: c, selector: c })));
    setHeaders(headers);
    setList(list);
    console.log("Headers:", headers);
    console.log("List:", list);
  };
  useEffect(() => {
    setUploadedFiles(dropzone.acceptedFiles);
  }, [dropzone.acceptedFiles]);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelected(file);
      const reader = new FileReader();
      reader.onload = (evt) => {
        const bstr = evt?.target?.result as string;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 }); 
     
        processData(data);
      };
      reader.readAsBinaryString(file);
    }
  };
  return (
    <>
    <DropZoneContainer >
      <FileInput type="file" accept=".csv,.xlsx,.xls"  onChange={handleFileUpload} />
    </DropZoneContainer>
    </>
  );
};
export default DropZone;