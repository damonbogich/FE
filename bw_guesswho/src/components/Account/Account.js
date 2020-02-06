import React, {useEffect, useState} from 'react';
import AccountForm from './AccountForm';

import { connect } from 'react-redux';
import { editUserInfo } from '../actions';
import Menu from '../Nav/Menu'; 
import {axiosWithAuth} from '../../utils/axiosWithAuth';

function Account(props) {
const id = localStorage.id
const [email, setEmail] = useState()
const [points, setPoints] = useState()
useEffect( () => {
    axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(res => {
            setEmail(res.data.email)
            setPoints(res.data.points)
    })
        .catch(err => console.log(err))
},[])
    return (
            <div>
                <Menu />
                <h1>Email: {email}</h1>
                <h1>Score: {points}</h1>
            </div>
    )
}

export default Account