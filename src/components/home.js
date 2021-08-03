import api from '../services/api'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {

    const [people, setPeople]  = useState([]);
    const [name, setName]  = useState();
    const [idPeople, setIdPeople]  = useState(1);
    const dispatch = useDispatch()
    const reducer = useSelector(state => state.homeReducer)

        // useEffect(() => {
        //     api.get(`/people/${idPeople}`)
        //     .then((response) => {
        //         setPeople(response.data)
        //         dispatch({
        //             type: "GET_PEOPLE",
        //             payload: response.data
        //         })
        //     });
            
        // }, []);


    const getPeople = (id) => {
        api.get(`/people/${id}`)
            .then((response) => {
                dispatch({
                    type: "GET_PEOPLE",
                    payload: response.data
                })
            });
    }
    
    
    return (
        <div>
            <input onChange={(event, type) => {
                setIdPeople(event.target.value)
            }} />

            

            <input onClick={()=> getPeople(idPeople)} type="button" className="btn" value="TONH" />

            <span className="titulo">STAR WARS</span>
            <div style={{flexDirection: "column", display: 'flex', marginTop: 15}}>
                <span><strong>NAO SALVO </strong></span>
                <span>nome {people.name}</span>
                <span>height {people.height}</span>
                <span>eye color {people.eye_color}</span>
                <span>mass {people.mass}</span>
                <span>birth year {people.birth_year}</span>
            </div>

            <div style={{flexDirection: "column", display: 'flex', marginTop: 15}}>
                <span><strong>SALVO NO REDUCER</strong></span>
                <span>nome {reducer.name}</span>
                <span>height {reducer.height}</span>
                <span>eye color {reducer.eyeColor}</span>
                <span>mass {reducer.mass}</span>
                <span>birth year {reducer.birthYear}</span>
            </div>

            <input onChange={(event, type) => {
                setName(event.target.value)
            }} />
                        <input onClick={()=> dispatch({ type: "EDIT_NAME", payload: { name }})}type="button" className="btn" value="TONH" />

        </div>
    )
}