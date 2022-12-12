import "./list.scss"
import Sidebar from "../../components/SideBar/sidebar"
import Navbar from "../../components/NavBar/navBar"
import Datatable from "../../components/Datatable/datatable"
// import { userColumns } from "../../datatablesource"

const List = ({column}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable column={column}/>
      </div>
    </div>
  )
}

export default List