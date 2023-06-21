"use client"
import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

// Create the initial state
const initialState = {
    user: null,
    loading: true,
    error: null,
};

// Create the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_USER_FAILURE':
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                loading: false, // Set loading to true
                error: null,
            };
        default:
            return state;
    }
};

// Create the UserContext
export const UserContext = createContext();

export const useUser = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.get(
                    'http://localhost:3005/users/current/user',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                dispatch({ type: 'SET_USER', payload: response.data.data });
            } catch (error) {
                dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message });
            }
        } else {
            dispatch({ type: 'FETCH_USER_FAILURE', payload: 'No token found' });
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !state.user) { // Fetch user only if token exists and user is not already set
            fetchUser();
        }
    }, [state.user]);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        localStorage.removeItem('token');
    };

    return { ...state, dispatch, logout };
};


// Create the UserProvider component
export const UserProvider = ({ children }) => {
    const userState = useUser();

    return (
        <UserContext.Provider value={userState}>{children}</UserContext.Provider>
    );
};
