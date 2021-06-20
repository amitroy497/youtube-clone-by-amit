import React from 'react'
import './_index.scss'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import Avatar from '@material-ui/core/Avatar'
import AvatarPic from './../../assets/images/casual-pic.jpg'
import YoutubeLogo from './../../assets/images/logo192.png'

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className='border border-dark header'>
      <FaBars
        className='header_menu'
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img src={YoutubeLogo} alt='youtube' className='header_logo' />
      <form>
        <input type='text' placeholder='Search' />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className='header_icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <Avatar src={AvatarPic} alt='Amit Roy' />
      </div>
    </div>
  )
}

export default Header
