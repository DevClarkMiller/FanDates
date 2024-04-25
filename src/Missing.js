import Link from 'react-router-dom'

const Missing = () =>{
    return(
        <div className='missingPage'>
            <h1>Page not found 😭</h1>
            <Link to="/">
                <p>Check out our homepage though</p>
            </Link>
        </div>
        
    )
}

export default Missing;