import { createStore, persist} from "easy-peasy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { model } from "../dataModel";
 
const store = createStore(persist(model, {
    storage: {
        getItem: async function (key){ 
            const value = await AsyncStorage.getItem(key);
            return JSON.parse(value);
        },
        setItem: function (key, value){ 
            AsyncStorage.setItem(key, JSON.stringify(value))
        },
        removeItem(key) {
            AsyncStorage.removeItem(key)
        }
    },  
    allow: ['todo'],
}));

export default store;