import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, []);

    return (
        <div className='header'>
            <div className='noteDiv'>
                <button className='note'><Link className="liNote" to='/note'>Notatka</Link></button>
            </div>
            < div className='headerInside'>

                <div>
                    {date.toLocaleDateString()}
                </div>
                <div>
                    {date.toLocaleTimeString()}
                </div>
            </div>
        </div>
    )
};
export default Header;