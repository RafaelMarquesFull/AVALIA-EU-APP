import Header from '../components/Header'
import { Outlet } from 'react-router-dom'


function PageBase(){
    return(
        <main>
            <Header/>
            <containe>
                <Outlet/>
            </containe>
        </main>
    )
}
export default PageBase;