import React from 'react';
import { LogoutButton } from '../LogoutButton';
import { Image } from 'primereact/image';
import { Menubar } from 'primereact/menubar';
import logo from '../../assets/rtp_sinlogo.png';
import { Link, useNavigate } from "react-router-dom";



export const Header = () => {

  const navigate = useNavigate();

  
  const items = [
    {
      label: 'Inicio',
      command: () => {
        console.log('Inicio');
        navigate('/homepage');
      } 
    },
    {
      label: 'Aplicación',
      command: () => {
        navigate('/app');
      } 
    },
    {
      label: 'Gestión',
      items: [
        {
          label: 'Dumps',
          command: () => {
            navigate('/dumps');
          } 
        },
        {
          label: 'SAM',
          command: () => {
            navigate('/samcounters');
          } 
        }
      ]
    }
  ]

  const start = <a href="https://www.rtp.cdmx.gob.mx/" target="blank">
                  <Image imageClassName='w-3rem' src={logo} alt="Logo RTP" />
                </a>

  const end = <Link to="/">
                <LogoutButton/>
              </Link>
    

  return (
    <div className="relative w-full h-4rem ">

      <Menubar className='border-3 h-4rem border-green-200 w-screen top-0 right-0' start={start}  model={items} end={end}/>

      

    </div>
  )
}



/* 
<ul class="topbar-menu p-unselectable-text" role="menubar">
      <li role="none" class="topbar-submenu">
        <button type="button" role="menuitem" class="p-link">
          Prueba
        </button>
      </li>
      <li role="none" class="topbar-submenu">
        <button type="button" role="menuitem" class="p-link">
          Prueba2
        </button>
      </li>
      <li role="none" class="topbar-submenu">
        <button type="button" role="menuitem" class="p-link">
          Prueba3
        </button>
      </li>

    </ul> */