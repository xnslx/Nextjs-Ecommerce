import React, {useState} from 'react'
import {slide as Menu} from 'react-burger-menu';

const MenuIcon = (props) => {
    const [isMenuOpen, handleMenu] = useState(false)
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '16px',
          height: '16px',
          left: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#ffffff',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em',
          width:'100vw',
          marginTop:'-32px'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#111827',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }

    const handleCloseMenu = () => {
        handleMenu(false)
    }

    const handleStateChange = (state) => {
        handleMenu(state.isOpen)
    }
    return (
        <Menu styles={styles} isOpen={isMenuOpen} onStateChange={handleStateChange}>
            {props.children}
        </Menu>
    )
};

export default MenuIcon;
