import Header from "../../../components/header/header"
import Footer from "../../../components/footer/footer"
import "./home.css"

export default function Home(params) {
    return(
        <div className="container_home" >
            <div>
                {Header}
            </div>
                <section className="section_Home" >
                    

                </section>
            <div>
                {Footer}
            </div>
           
  
        </div>
    )
}