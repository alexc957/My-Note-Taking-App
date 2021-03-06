import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import { selectUserEmail, logOutUser } from '../features/User/userSlice';

export default function NavBar() {
    const userId = useSelector(selectUserEmail);
    const history = useHistory()
    const dispatch = useDispatch()
    const firebase = useContext(FirebaseContext)

    const handleLogout = async () => {
        await firebase.auth().signOut()
        dispatch(logOutUser())
        history.push("/")
        
    } 
    return (
        <nav className="w-screen h-12 bg-blue flex flex-row justify-between items-center">
            <Link className="bg-blue text-primary text-sm px-8"  to="/">Home</Link>
            <div className="flex flex-row-reverse items-center">
            {userId? (<button className="bg-blue text-primary text-sm pr-8" data-testid="logout" onClick={handleLogout}>Log Out</button>)
            :
            (<><Link  className="bg-blue text-primary text-sm pr-8" to="/login">Log In</Link> <Link className="bg-blue text-primary text-sm pr-8" to="/signup">Sign Up</Link> </>)}

            </div>
           
          
        </nav>
    )
}
