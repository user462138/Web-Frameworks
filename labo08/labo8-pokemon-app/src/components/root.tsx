import { NavLink, Outlet } from "react-router-dom";


export const Root = () => {
    return (
        <div className="browser">
            <div className="browser-navigation-bar">
                <i></i>
                <i></i>
                <i></i>
                <input className="urlbar" value="http://localhost:8080/" readOnly />
            </div>
            <div className="browser-container">
                <div>
                    <div
                        style={{
                            height: '50px',
                            width: '100%',
                            backgroundColor: 'rgb(26, 200, 162)',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'stretch',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '11pt',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '80px',
                                cursor: 'pointer',
                                color: 'white',
                                backgroundColor: 'green',
                            }}
                        >
                            <NavLink to="/" >Home</NavLink>
                        </span>
                        <span
                            style={{
                                fontSize: '11pt',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '80px',
                                cursor: 'pointer',
                                color: 'white',
                            }}
                        >
                            <NavLink to="/PokemonsListPage" >Pokemons</NavLink>
                        </span>
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}