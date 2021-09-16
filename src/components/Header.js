import React from 'react'


const Header = ({title}) => {
    return ( 
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1> 
                    
                    <h3 className="text">Rick & Morty series characters  </h3>
                </div>
            </div>
        </header>
     );
}
 
export default Header;