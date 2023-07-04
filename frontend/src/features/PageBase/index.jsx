import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import './index.css'


export default function PageBase(){
    return(
        <main className='container'>
            <Header/>
            <containe>
                <Outlet/>
            </containe>
            <Footer/>
        </main>
    )
}