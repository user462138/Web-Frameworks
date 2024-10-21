import { useContext } from "react"
import { DataContext } from "./dataContext"
import { useNavigate } from "react-router-dom";

export const PokemonsListPage = () => {
    const { pokemons } = useContext(DataContext)
    const navigate = useNavigate();
    return (
      <>
        <div style={{
          flex: '1 1 0%',
          display: 'flex',
          flexDirection: 'column',
          padding: '10px'
        }}>
          <input style={{
            backgroundColor: 'rgb(160, 209, 140)',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px',
          }} type="text" />
          <div style={{ flex: '1 1 0%' }}>
            {pokemons.map(poke => <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '10px',
              height: '70px',
              boxShadow: '0px 0px 1px black',
              cursor: 'pointer',
              backgroundColor: 'white',
              color: 'black',
            }}
            onClick={() => navigate(`/detail/${poke.id}`)}
            key={poke.id}
            >{poke.name}</div>)}
          </div>
        </div>
      </>
    )
  }