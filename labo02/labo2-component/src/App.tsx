import React from "react"

interface HeaderProps {
  title: string
  subtitle: string
}
const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </React.Fragment>
  )
}


interface ListItemProps {
  text : string
}
const ListItem = ({text} : ListItemProps) => {
  return (
    <React.Fragment>
    <li key={text}>{text}</li>
    </React.Fragment>
  )
}

interface ListProps {
  items : string[]
}
const List = ({items} : ListProps) => {
  return (
    <React.Fragment>
    <ul>
    {items.map(item =><ListItem key={item} text={item}></ListItem>)}
    </ul>
    </React.Fragment>
  )
}

interface FooterProps{
  copy : string
  year : number
}
const Footer = ({copy, year} : FooterProps) => {
  return(
    <React.Fragment>
      <p>© {copy} ({year})</p>
    </React.Fragment>
  )
}


const App = () => {
  const items : string[] = ["item 1","item 2","item 3"]
  return (
    <React.Fragment>
      <Header title="Labo 2" subtitle="Basic components"></Header>
      <List items={items}></List>
      <Footer copy="Yazan Dukhan" year={2024}></Footer>
    </React.Fragment>
  );
};

export default App;