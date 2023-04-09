import { useEffect, useReducer } from "react"
import axios from "axios"

const ACTIONS = {
    FETCH_LOADING: 'FETCH_LOADING',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR'
}

const reducer = (state, action) => {
    /*   action --> is --> object
      Destructuring action  */
    const { type, payload } = action
    switch (type) {
        case ACTIONS.FETCH_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case ACTIONS.FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: payload,
                error: false
            }
        }
        case ACTIONS.FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                data: [],
                error: true
            }
        }

        default: {
            return state
        }
    }
}

const initialState = {
    loading: false,
    data: [],
    error: false
}

export default function useFetch(url) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_LOADING })

        axios.get(url)
            .then((res) => {
                dispatch({
                    type: ACTIONS.FETCH_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({ type: ACTIONS.FETCH_ERROR })
            })
    }, [])
    
    return { state } //always prefer Object Export and not Array
}