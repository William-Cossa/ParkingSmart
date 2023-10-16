
import './App.css'
import LoginPage from './components/LoginPage'
import Sidebar, { SidebarItem } from './components/Sidebar'
import { BiHomeAlt,BiSolidReport,BiLogOut} from 'react-icons/bi'
import { FaUsers} from 'react-icons/fa'
import vagas from './assets/parking.png'
import employee from './assets/employee.png'
import { PiUsersThree,PiClipboardTextBold} from 'react-icons/pi'
import { RiMoneyDollarCircleLine} from 'react-icons/ri'
import { MdAttachMoney,MdOutlineInfo} from 'react-icons/md'


function App() {

  return (
    <>
   {/* <LoginPage/> */}
   <Sidebar>
      <SidebarItem icon={<BiHomeAlt size={32}/>} text={'Dashboard'} active/>
      <SidebarItem icon={<img src={employee}/>} text={'Funcionários'} />
      <SidebarItem icon={<PiUsersThree className="" size={32}/>} text={'Clientes'} />
      <SidebarItem icon={<img src={vagas}/>} text={'Vagas'} />
      <SidebarItem icon={<MdAttachMoney className="" size={32}/>} text={'Pagamentos'} />
      <SidebarItem icon={<PiClipboardTextBold className="" size={32}/>} text={'Relatórios'} />
      <SidebarItem icon={<MdOutlineInfo className="" size={32}/>} text={'About'} />
      <SidebarItem icon={<BiLogOut className="" size={32}/>} text={'LogOut'} />

   </Sidebar>
        
    </>
  )
}

export default App
