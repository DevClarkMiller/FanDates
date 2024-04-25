import {useNavigate} from 'react-router-dom';


const DateNSync = ({handleSync}) =>{
    let date = new Date();
    let dateFormatted = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    const navigate = useNavigate(); //Used for redirecting
    
    return(
        <div className="dateNSync">
            <h2><span className="regText">Today is </span>{dateFormatted}</h2>

            <span className="syncNAdd">
                <button onClick={handleSync}>Sync with FOL</button>
                <button onClick={() => navigate('/create')}>Create Item</button>
            </span>
        </div>
    )
}

export default DateNSync;