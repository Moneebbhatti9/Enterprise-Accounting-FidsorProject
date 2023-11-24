import React from 'react';

import XLSX from 'xlsx';
import Link from '@mui/material/Link';
const downloadFile = () => {
  const fileUrl =
    'https://nimbleads-web-contents.s3.us-east-2.amazonaws.com/shoaib/example.xls?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230816T085545Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAVOMDMB6YDZQ2EGOL%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=2b6854acd0f575f509b51fbfa180ae774c51a9d8382f864bf8f56ee051ff3350';
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', 'example.xls');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadButton = () => {
  return (
    <Link href="#" underline="hover" onClick={downloadFile} style={{fontSize:'12px'}}>
      Download File
    </Link>
  );
};
export default DownloadButton;
