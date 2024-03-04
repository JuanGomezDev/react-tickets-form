import { useState } from 'react';
import '../styled-components/addTicket.scss';

export default function AddTicket({ handleTicketSubmit }) {
    const [title, setTitle] = useState('Add the ticket title');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('Add the ticket description');
    const [resolved, setResolved] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleTicketSubmit({ title, priority, description, resolved });
        setTitle('');
        setPriority('');
        setDescription('');
        setResolved(false);
    }

    return (
        <div className="add-form">
            <h1>Add Ticket</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        minLength={6}
                        maxLength={18}
                    />
                </div>

                <div className="form-group">
                    <label>Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        required
                    >
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={30}
                    />
                </div>

                <div className="form-group checkbox">
                    <label htmlFor='checkbox'>
                        Mark as resolved
                    </label>
                    <input
                        id='checkbox'
                        type="checkbox"
                        checked={resolved}
                        onChange={(e) => setResolved(e.target.checked)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}