const defaultState= {
    fetching:false,
    msg:"",
    error:"",
    registered:false
};

const Register = (state = defaultState,  action) => {
    switch (action.type) {
        case 'REGISTERED':
            return { ...state, fetching:true, error: "",registered:true, msg: action.data.msg };
        case 'REGISTERED_ERROR':
            return { ...state, fetching:false, error:action.data.error, registered:false, };
        case 'REGISTERED_RESET':
            return { ...state, fetching:false, error:"",msg:"", registered:false, };
        default:
            return state
    }
};

export default Register;