import { Link } from "react-router-dom"

const AdminPage = () => {

    return (
        <div>
            <Link to='/admin/edit'>Edit Menu</Link>
            <Link to='/admin/orders'>Orders</Link>
            <Link to='/admin/statistics'>Statistics</Link>
        </div>
    )

}

export default AdminPage