import { useContext } from "react"
import { DataContext } from "./dataContext"
import { useNavigate, useParams } from "react-router-dom"




export const PokemonsDetailPage = () => {
    const {id} =  useParams()
    const navigate = useNavigate();
    const { pokemons } = useContext(DataContext)
    return (
        <div>
            <div>Name: {[pokemons[Number(id)].name]}</div>
            <div>Weight: {[pokemons[Number(id)].weight]}</div>
            <div>Height: {[pokemons[Number(id)].height]}</div>
            <div> <img src="" /></div>
            <div onClick={() => navigate(`/pokemonslistPage`)} ><span style={{ cursor: 'pointer' }}>Back</span></div>
        </div>
    )
}