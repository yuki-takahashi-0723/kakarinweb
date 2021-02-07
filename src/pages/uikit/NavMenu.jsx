import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'


const MenuWrap = styled.div`
    padding:0;
`

const BarWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const Anderber = styled.div`
    width:20px;
    border:solid 0.1px #FF6694;

    margin-bottom:5px;
`



const NavMenu = (props) => {

    const [anchorEl,setAnchorEL] = useState(null)

    const handleClick = (e)=>{
        setAnchorEL(e.currentTarget)
    }
    const handleClose = () =>{
        setAnchorEL(null)
    }
    
    return(
        <MenuWrap>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <BarWrap>
                    <Anderber></Anderber>
                    <Anderber></Anderber>
                    <Anderber></Anderber>
                </BarWrap>         
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    props.menus.map(menu=>{
                         return <MenuItem onClick={()=>props.history.push('/'+ menu.id)} key={menu.id}>{menu.title} </MenuItem>
                    }
                    )
                }
                
            </Menu>
    </MenuWrap>
    )
}

export default NavMenu