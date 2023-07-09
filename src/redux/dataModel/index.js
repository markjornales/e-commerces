import AsyncStorage from '@react-native-async-storage/async-storage';
import {reducer, action} from 'easy-peasy';

const initState = {
    registered: [],
    login: {
        isLogin: false,
        fullname: '',
        email: '',
        password: ''
    },
    carts: [],
    checkout: []
}

const registered = reducer((state = initState.registered, action) => {
    switch(action.type) {
        case "registered": 
            return [...state, action.data]; 
        case "update_register": 
            return state.map((value, index) => {
                if(index == action.data.id) {
                    value.fullname = action.data.fullname;
                    value.email = action.data.email;
                    value.password = action.data.password;
                }
                return value;
            });
        default: return state;
    }
});

const login = reducer((state = initState.login, action) => {
    switch(action.type) {
        case "is_login":
            return state = {
                isLogin: true,
                fullname: action.data.fullname,
                email: action.data.email,
                password: action.data.password,
                id: action.data.id
            };
        case "is_logout":
            return state = {
                isLogin: false,
                fullname: '',
                email: '',
                password: ''
            }
        default: return state;
    }
});

const carts = reducer((state = initState.carts, action) => {
    switch(action.type){
        case "add_to_cart":
            const exists = state.find((data) => data.id == action.data.id);
            if(exists) {
                return state.map((data) => {
                    if(data.id == action.data.id) {
                        data.quantity ++;
                    }
                    return data;
                })
            } else {
                return [...state, action.data];
            }
        case "add_minus_item": 
            return state.map((data) => {
                if(data.id == action.data.id){
                    data.quantity = action.data.quantity;
                }
                return data;
            });
        case "delete_item":
            return state.filter((data) => data.id !== action.data);
        case "remove_all_item":
            return state = [];
        default: return state;
    }
});

const checkout = reducer((state=initState.checkout, action) => {
    switch(action.type) {
        case "checkout_now":
            return [...state, action.data];
        default: return state;
    }
})

const reset = action(() => {
    AsyncStorage.clear();
    return {...initState};
});

export const model = {  
    reset,
    registered,
    login,
    carts,
    checkout
}
