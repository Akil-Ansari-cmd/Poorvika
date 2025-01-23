import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { FaBoltLightning } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { CiSquareMore } from "react-icons/ci";
import { FcAbout, FcBusinessman } from "react-icons/fc";
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdHelpCircleOutline, IoMdNotifications } from 'react-icons/io';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const [product, setProduct] = React.useState("login");

    // const handleProduct = () => {
    //     setProduct(!product);
    // }


    // const [grocery, setGrocery] = React.useState();

    // const handleGrocery = () => {
    //     setGrocery(!grocery);

    // }


    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    return (
        <div>
            <Button onClick={toggleDrawer(true)}><GiHamburgerMenu className='h-6 w-6 text-white' /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div >
                    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
                        <div className=''><div className='flex justify-around bg-orange-500 p-5 text-white'><MdPeople className='h-6 w-6' />
                            <div onClick={() => setProduct("login")} >Login

                            </div>
                            <div onClick={() => setProduct("SignUp")}>SignUp
                            </div>
                        </div>
                            <div className='mt-2'>
                                {
                                    product === "login" && <div className='flex flex-col gap-4 text-gray-500'>
                                        <div className='flex gap-4 ml-5'><FaBoltLightning className='mt-2' />
                                            <div>SuperCoin Zone</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><CiSquarePlus className='mt-2' />
                                            <div> Plus Zone</div>
                                        </div>
                                        <Divider />
                                        <div className='flex gap-4 ml-5'><CiSquareMore className='mt-1.5' />
                                            <div>SuperCoin Zone</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><BiSolidCategoryAlt className='mt-1.5' />
                                            <div> Plus Zone</div>
                                        </div>
                                        <Divider />
                                        <div className='flex gap-4 ml-5'><FaBoltLightning className='mt-2' />
                                            <div>SuperCoin Zone</div>
                                        </div>
                                        <Divider />
                                        <div className='flex gap-4 ml-5'><FaBoltLightning className='mt-2' />
                                            <div>SuperCoin Zone</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><CiSquarePlus className='mt-2' />
                                            <div> Plus Zone</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><FaBoltLightning className='mt-2' />
                                            <div>SuperCoin Zone</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><CiSquarePlus className='mt-2' />
                                            <div> Plus Zone</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><FaBoltLightning className='mt-2' />
                                            <div>SuperCoin Zone</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><CiSquarePlus className='mt-2' />
                                            <div> Plus Zone</div>
                                        </div>
                                    </div>
                                }
                                {
                                    product === "SignUp" && <div className='flex flex-col gap-4 text-gray-500'>
                                    <div className='flex gap-4 ml-5'><FcBusinessman className='mt-1' />
                                            <div>Profile</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><MdAddShoppingCart className='mt-1' />
                                            <div>Cart</div>
                                        </div>
                                        <Divider />
                                        <div className='flex gap-4 ml-5'><IoMdHelpCircleOutline  className='mt-1.5' />
                                            <div>Help Center</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><IoMdNotifications className='mt-1.5' />
                                            <div>Notication</div>
                                        </div>
                                        <div className='flex gap-4 ml-5'><FcAbout className='mt-1.5' />
                                            <div>About</div>
                                        </div>
                                    </div>
                                }
                            </div>

                        </div>
                    </Box>
                </div>
            </Drawer>
        </div>
    );
}
