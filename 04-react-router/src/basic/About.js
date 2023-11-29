import { useSearchParams,useParams } from "react-router-dom";
function About(){
    // let [searchParams, setSearchParams] = useSearchParams()
    // let id = searchParams.get("id")
    // let name = searchParams.get("name")

    let { id } = useParams();
    let param = useParams();
    console.log(param)
    
    return(
        <div>about  {id}</div>
    )
}

export default About