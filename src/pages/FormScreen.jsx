import { useState } from 'react';
import AddTicket from '../components/AddTicket';
import './formScreen.scss';

export default function FormScreen() {
    const [tickets, setTickets] = useState([]);

    const handleAddTicket = (tickets) => {
        setTickets([...tickets]);
    }

    return (
        <>
        <section>
            <AddTicket handleAddTicket={handleAddTicket}/>

        </section>
        </>
    )
}
