import AsyncStorage from '@react-native-async-storage/async-storage';
import {reducer, action} from 'easy-peasy';

const initState = {
    registered: {}    
}

const registered = reducer((state = initState.registered, action) => {
    switch(action.type) {
        case "registered": 
            return state = {
                fullname: action.fullname,
                email: action.email,
                password: action.password
            } 
        default: return state;
    }
});


const reset = action(() => {
    AsyncStorage.clear();
    return {...initState};
});

export const model = {  
    reset,
    registered
}
