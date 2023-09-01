import { useSearchParams,useParams } from "react-router-dom";
function About(){
    // let [searchParams, setSearchParams] = useSearchParams()
    // let id = searchParams.get("id")
    // let name = searchParams.get("name")

    let { id } = useParams();
    let param = useParams();
    
    return(
        <div>about {param.id}</div>
    )
}

export default About