let data={
    showAlert:false,
    showLoader:false,
    alertMessage:null,
    alertType:'',
    timeOut:null
  }
  const Settings = (state = data, action) =>{
      switch (action.type) {
          case 'LOADER':
              state = {...state, showLoader:action.payload};
              break;
          case 'SHOW_ALERT':
                state = {
                    ...state,
                    showAlert: true,
                    alertMessage: action.payload.message,
                    alertType: action.payload.type,
                    timeOut: action.payload.timeOut || 2000
                };
                break;
            case 'HIDE_ALERT':
                state = {
                    ...state,
                    showAlert: false,
                    alertMessage: '',
                    alertType: '',
                    timeOut: null
                };
                break;
          default:
              break;
      }
      return state;
  }
  export default Settings