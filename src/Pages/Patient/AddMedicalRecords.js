import React,{useState} from 'react';
import { styled,Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dialogs from '../../FunctionalComponents/Dailogs/Dailogs';
import MBForm from '../../FunctionalComponents/MBForm/MBForm';
import MBTextField from '../../FunctionalComponents/MBTextField/MBTextField';
import MBDatePicker from '../../FunctionalComponents/MBDatePicker/MBDatePicker';
import MBFormButton from '../../FunctionalComponents/MBFormButton/MBFormButton';
import MBSelect from '../../FunctionalComponents/MBSelect/MBSelect';
import Axios from '../../Api/Axios';
import {ReducerTypes,AlertTypes} from '../../Assets/Constants';
import Store from '../../Store';
import { connect } from 'react-redux';

const ContentStyle = styled('div')(({ theme }) => ({
    // maxWidth: 580,
    padding:'25px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // padding: theme.spacing(12, 0),
   
  }));
const mRobj = {label:'label',value:'value'}
const mRData =[{label:'MySelf', value:'MySelf'},{label:'Children', value:'Children'}
]
const AddMedicalRecords = ({handleClose,userId})=>{
  console.log(userId);
  const navigate = useNavigate();
    const [valid,setValid]=useState(false)
    const [file, setFile]=useState('')
    const [medicalRecords, setMedicalRecords]=useState({
        'doctorname':'','hospitalname':'','symptoms':'','date':''
    })

    // const [patient, setPatient] = useState('')
    console.log(medicalRecords)

    const mRChange = (e)=>{
      setMedicalRecords({...medicalRecords,[e.target.name]:e.target.value})
    }
    const handleInputChange = e =>{
      setFile(e.target.files[0])
    }

    const saveMedicalRecords = (e) =>{
        e.preventDefault();
        setValid(true);
        e.preventDefault();
      
        if(file){
          console.log(file)
        let uploadFiles= JSON.stringify({'documentLink_appointmentDocuments':file.name})
        let documentData=JSON.stringify({"docName":medicalRecords.doctorname,"hospitalName":medicalRecords.hospitalname,
        "symptoms":medicalRecords.symptoms,'date':medicalRecords.date})
        var formdata=new FormData()
        formdata.append('appointmentId_appointmentDocuments',1);
        formdata.append('userId_appointmentDocuments',userId);
        formdata.append('documentData_appointmentDocuments',[documentData]);
        formdata.append('isActive_appointmentDocuments',1);
        formdata.append('documentLink_appointmentDocuments',file);
        formdata.append('uploadedFiels',uploadFiles);
        console.log(Object.fromEntries(formdata.entries()))
       
       const config ={
          headers:{
            'Content-Type':'multipart/form-data',
          }
        }
        Axios.postData('Upload_appointmentDocuments/',formdata,config).then((res)=>{
            console.log(res)
            Store.dispatch({
          type: ReducerTypes.SHOW_ALERT.toString(),
          payload: {
            showAlert: true,
            message: `Uploaded Successfully!`,
            type: AlertTypes.SUCCESS_ALERT_TYPE
          }
        })
        handleClose()
        }).catch(err =>{
          console.log(err)
        })
        
      }
      }
      
    return( 
        <>
             <ContentStyle>
             <MBForm onSubmit={saveMedicalRecords}>
             <MBTextField id="doctorname" name="doctorname" value={medicalRecords.doctorname} onChange={mRChange} className={"mbtxt-width"} 
             label="Doctor Name" required validate={valid}/>
             <MBTextField id="hospitalname" name="hospitalname" value={medicalRecords.hospitalname} onChange={mRChange} className={"mbtxt-width"} 
             label="Hospital Name" required validate={valid}/>
             <MBTextField id="symptoms" name="symptoms" value={medicalRecords.symptoms} onChange={mRChange} className={"mbtxt-width"} 
             label="Symptoms" required validate={valid}/>
             {/* <MBSelect
              obj={mRobj} data={mRData}
              fullWidth
              className={''}
              id={'patient'}
              key={'patient'}
              value={patient}
              name={'patient'}
              required={false}
              label={'Patient'}
              onChange={(e)=>setPatient(e.target.value)}
             /> */}
             <MBDatePicker id="date" name="date" value={medicalRecords.date} onChange={mRChange} className={"mbtxt-width"} 
             label="Date" required validate={valid}/>
              <div className='uploadcontainer'>
            <div class="button-wrap">
              <label class="new-button" for="upload">Upload File</label>
              <input id="upload" type="file" name="file" accept='.pdf' onChange={handleInputChange}/>
             </div>
            <span>{file ? file.name : 'No file choosen'}</span>
            </div>
            <Stack direction="row" justifyContent="right" alignItems="right" sx={{mt:0.5}}>
             <MBFormButton color="error" fullWidth={false} variant="contained" type="button" 
              style = {{marginRight: '5px'}} onClick={handleClose}
             >Cancel</MBFormButton>
             <MBFormButton fullWidth={false} variant="contained" type="submit">Save</MBFormButton>

           </Stack>
             </MBForm>
             </ContentStyle>
        </>
    )
}
const mapStateToProps = (state)=>{
  console.log(state)
  return{
    userId:state.User.userId_users
  }
}
export default connect(mapStateToProps)(AddMedicalRecords)