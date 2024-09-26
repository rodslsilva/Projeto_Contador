import { useState, useContext } from "react"

import { CountdownContext } from "../context/CountdownContext"

import { useNavigate } from "react-router-dom"

import "./Home.css"

const Home = () => {
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [color, setColor] = useState()

    const { SetEvent } = useContext(CountdownContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const eventObject = {
            title,
            date,
            color
        }

        SetEvent(eventObject)
        navigate("/countdown")
    }

    return (
        <div className='home'>
            <h2>Monte a sua contagem regressiva!</h2>
            <form className='countdown-form' onSubmit={handleSubmit}>
                <label>
                    <span>Título</span>
                    <input type="text" name='title' placeholder='Digite o título do evento' onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <label>
                    <span>Data do Evento</span>
                    <input type="date" name='date' onChange={(e) => setDate(e.target.value)} required />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Home
