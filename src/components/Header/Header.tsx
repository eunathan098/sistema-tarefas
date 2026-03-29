import DashBoard from '../DashBoard/DashBoard'
import '../Header/Header.css'
import NavBar from '../NavBar/NavBar'

function Header(){
    return(
        <>
            <header>
                <NavBar></NavBar>
            </header>
            
            <div className="main">
                <DashBoard></DashBoard>
            </div>
        </>
    )
}
export default Header