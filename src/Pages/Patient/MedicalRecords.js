import React,{ useState,useEffect} from "react";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MBTable from "../../FunctionalComponents/MBTable/MBTable";
import Dialogs from '../../FunctionalComponents/Dailogs/Dailogs';
import MBFormButton from '../../FunctionalComponents/MBFormButton/MBFormButton';
import AddMedicalRecords from './AddMedicalRecords';
import fileDownload from 'js-file-download';
import axios from 'axios';
import Axios from "../../Api/Axios";

const TABLE_HEAD = [
  // { id: "ID", label: "ID", alignRight: false },
  // { id: "Date", label: "Date", alignRight: false },
  // { id: "documentData_appointmentDocuments", label: "Description", alignRight: false },
  // { id: "Attachment", label: "Attachment", alignRight: false },
  // { id: "Created", label: "Created", alignRight: false },
   { id: "ID", label: "ID", alignRight: false },
   { id: "date", label: "Date", alignRight: false },
   { id: "docName", label: "Doctor Name", alignRight: false },
   { id: "hospitalName", label: "Hospital Name", alignRight: false },
   { id: "symptoms", label: "Description", alignRight: false },

  
];

const actions = [
  { icon: "", actionName: "View" },
  { icon: "", actionName: "Print" },
];
const MedicalRecords = () => {
  const [open, setOpen]=useState(false);
  const [data,setData]=useState([]);
  console.log(data)
  useEffect(() => {
    mRData()
  }, [])
    const handleClose = ()=>{
        setOpen(false)
    }
    const handleOpen = () =>{
        setOpen(true)
    }
  const onAction = (e) => {
    console.log(e);
  };
  const mRData=()=>{
   Axios.getData('SelectAll_appointmentDocuments/').then(res =>{
    console.log(res)
    let description = res.map(i => i.documentData_appointmentDocuments);
    console.log(description)
    console.log()
     console.log(description.map(JSON.parse))
     setData(description.map(JSON.parse))
    //  setData(res)
   }).catch(err =>{

   })
  }
  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      console.log(res)
      fileDownload(res.data, filename)
    })
  }
  return (
    <>
      <Box className="login-block">
        <div className="table-view">
          <span  className="white-text mx-3">
            MEDICAL RECORDS
          </span>
          <MBFormButton className="apt-btn" onClick={handleOpen} variant={"outline"} type="button">Add Medical Records</MBFormButton>
        </div>
        <MBTable
          data={data}
          head={TABLE_HEAD}
          actionList={actions}
          onAction={onAction}
        />
         <Dialogs open={open} classname={"dailog-title"} onClose={handleClose} handleClose={handleClose} title={
            <>Medical Record
            </>
        } content={ 
            <AddMedicalRecords handleClose={handleClose}/>
        }/>
        {/* <button type="button" onClick={()=>handleDownload(`${process.env.REACT_APP_API_URL}GetFile/1674543124823546223temple_of_health.sql`,'example.sql')}>DownLoad</button> */}
      </Box>
    </>
  );
};
export default MedicalRecords;

