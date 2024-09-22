interface HeaderProps {
  title: string
  subtitle: string
}
const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  )
}

interface ListProps {
  items : string[]
}

const List = ({items} : ListProps) => {
  return (
    <>
    //{items.map(item =>item )}
    </>
  )
}


const App = () => {
  return (
    <>
      <Header title="Labo 2" subtitle="Basic components"></Header>
    </>
  );
};

export default App;