import Professor_Oak from "../assets/Professor-Oak.png"


export const HomePage = () => {
    return (
        <div
            style={{
                flex: '1 1 0%',
                display: 'flex',
                flexDirection: 'row',
                padding: '20px',
            }}
        >
            <div style={{ flex: '1 1 0%' }}>
                <img
                    src={Professor_Oak}
                    alt="Professor Oak"
                    style={{ width: '100px' }}
                />
            </div>
            <div style={{ flex: '2 1 0%' }}>
                Hello there! Welcome to the world of POKEMON!
                <br />
                <br />
                My name is OAK! People call me the POKEMON PROF!
                <br />
                <br />
                This world is inhabited by creatures called POKEMON!
                <br />
                <br />
                For some people, POKEMON are pets. Others use them for fights.
                Myself...I study POKEMON as a profession.
            </div>
        </div>
    );
}