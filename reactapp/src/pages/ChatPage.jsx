import React from 'react'
import {Link} from 'react-router-dom'

function ChatPage() {
  return (
    <div className='container'>
        <div className='navbar'>
            <ul className='nav-list'>
                <li className='nav-item'><Link to= "/trips">Putovanja</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default ChatPage