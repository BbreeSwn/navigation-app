import { FaHome,FaUser,FaShoppingCart } from "react-icons/fa"

const menuData = [
    {
        title: 'Home',
        path: '/',
        icon:  <FaHome/>
    },
    {
        title: 'Member',
        path: '/member',
        icon:  <FaUser/>
    },
    {
        title: 'Cart',
        path: '/cart',
        icon:  <FaShoppingCart/>
    },

]
export default menuData
