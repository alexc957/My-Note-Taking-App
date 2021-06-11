import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { selectDocId, logOutUser } from '../features/User/userSlice';

export default function NavBar() {
    const userId = useSelector(selectDocId);
    const history = useHistory()
    const dispatch = useDispatch()
    console.log(userId);
    const handleLogout = () => {
        dispatch(logOutUser())
        history.push("/")
        
    } 
    return (
        <nav className="w-screen h-12 bg-blue flex flex-row justify-between items-center">
            <Link className="bg-blue text-primary text-sm px-8"  to="/">Home</Link>
            <div className="flex flex-row-reverse items-center">
            {userId? (<button className="bg-blue text-primary text-sm pr-8" onClick={handleLogout}>Log Out</button>)
            :
            (<><Link  className="bg-blue text-primary text-sm pr-8" to="/login">Log In</Link> <Link className="bg-blue text-primary text-sm pr-8" to="/signup">Sign Up</Link> </>)}

            </div>
           
          
        </nav>
    )
}
