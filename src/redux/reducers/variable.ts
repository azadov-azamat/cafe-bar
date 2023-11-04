import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dictionary} from "../../helpers/enumuration/dictionary";
import i18n from "i18next";
import {BasketDataProps, InitialStateProps} from "../../interface/redux/variable.interface";
import burger from "../../assets/images/burger.png";
import bigger from "../../assets/images/bigger.png";
import longer from "../../assets/images/longer.png";
import classic from "../../assets/images/classic.png";
import hambuger from "../../assets/images/hambuger.png";
import roast from "../../assets/images/roast.png";

// export const login = createAsyncThunk('variables/login', async (data: authDataProps, {rejectWithValue}) => {
//     try {
//         const response = await http.post(`/auth/login`, data)
//         if (response.data === null) return rejectWithValue(response?.data)
//         return response.data
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

const initialState: InitialStateProps = {
    lang: localStorage.getItem('i18nextLng') || 'ru',
    loading: false,
    userData: null,
    products: [
        {
            name: 'Burger',
            price: '23000',
            img: burger
        },
        {
            name: 'Bigger',
            price: '26000',
            img: bigger
        },
        {
            name: 'Longer',
            price: '26000',
            img: longer
        },
        {
            name: 'Classic',
            price: '21000',
            img: classic
        },
        {
            name: 'Hamburger',
            price: '27000',
            img: hambuger
        },
        {
            name: 'Roast',
            price: '34000',
            img: roast
        }
    ],
    baskets: []
}

const reducers = {
    setLang: (state: InitialStateProps, action: PayloadAction<number>) => {
        const langIndex = action.payload
        state.lang = Dictionary[langIndex]
        i18n.changeLanguage(Dictionary[langIndex])
    },
    logoutFunc: (state: InitialStateProps) => {
        state.userData = null
        localStorage.clear()
    },
    setBasketItem: (state: InitialStateProps, action: PayloadAction<BasketDataProps>) => {
        state.baskets = [...state.baskets, action.payload]
    },
}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers
})

export const {
    setLang, logoutFunc,
    setBasketItem
} = variableSlice.actions;
export default variableSlice.reducer