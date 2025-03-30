import style from './style.module.css'
import { useState } from 'react';
import { NavLink } from "react-router";
import { Box, IconButton, Tooltip, MenuItem, Typography, Menu } from '@mui/material';
import { FaRegUser, FaRegBell } from "react-icons/fa6";
import { VscExtensions } from "react-icons/vsc";

const settings = ['Conta', 'Configurações', 'Sair'];
const notifications: string[] = [];

const MenuBar = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [anchorElBell, setAnchorElBell] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserBell = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBell(event.currentTarget);
    };

    const handleCloseUserBell = () => {
        setAnchorElBell(null);
    };

    return (
        <header className={style.header}>
            <div className="content">
                <div className={style.sub_header}>
                    <nav className={style.logo}>
                        <VscExtensions className={style.icon_logo}/>
                        <NavLink to="/">Monizy</NavLink>
                    </nav>

                    <div className={style.menu_admin}>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Notificações">
                                <IconButton onClick={handleOpenUserBell} sx={{ p: 0 }}>
                                    <FaRegBell className={style.icon_user} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '35px' }}
                                id="menu-appbar"
                                anchorEl={anchorElBell}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElBell)}
                                onClose={handleCloseUserBell}
                            >
                                {notifications?.map((notifications) => (
                                    <MenuItem key={notifications} onClick={handleCloseUserBell}>
                                        <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>
                                            {notifications}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Conta">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <FaRegUser className={style.icon_user} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '35px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MenuBar