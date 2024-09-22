import styles from "./App.module.css";

interface CardProps {
  logo: string
  name: string
  time: number
  content: string
  reference_thumb: string
  reference_title: string
  reference_subtitle: string
  reference_font: string
}
const Card = (prop: CardProps) => {
  return (
    <>
      <div className={styles.f_card}>
        <Header
          logo={prop.logo}
          name={prop.name}
          time={prop.time}
        ></Header>
        <Content
          content={prop.content}
        ></Content>
        <Reference
          reference_thumb={prop.reference_thumb}
          reference_title={prop.reference_title}
          reference_subtitle={prop.reference_subtitle}
          reference_font={prop.reference_subtitle}
        ></Reference>
        <Social></Social>
      </div>
    </>
  )
}

interface HeaderProps {
  logo: string
  name: string
  time: number
}
const Header = ({ logo, name, time }: HeaderProps) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.options}>
          <i className="fa fa-chevron-down"></i>
        </div>
        <img
          className={styles.co_logo}
          src={logo}
        />
        <div className={styles.co_name}>
          <a href="#">{name}</a>
        </div>
        <div className={styles.time}>
          <a href="#">Just {time} lives ago</a> · <i className="fa fa-globe"></i>
        </div>
      </div>
    </>
  )
}

interface ContentProps {
  content: string
}
const Content = ({ content }: ContentProps) => {
  return (
    <>
      <div className={styles.content}>
        <p>
          {content}
        </p>
      </div>
    </>
  )
}

interface ReferenceProps {
  reference_thumb: string
  reference_title: string
  reference_subtitle: string
  reference_font: string
}
const Reference = ({ reference_thumb, reference_title, reference_subtitle, reference_font }: ReferenceProps) => {
  return (
    <>
      <div className={styles.reference}>
        <img className={styles.reference_thumb} src={reference_thumb} />
        <div className={styles.reference_content}>
          <div className={styles.reference_title}>
            {reference_title}
          </div>
          <div className={styles.reference_subtitle}>
            {reference_subtitle}
          </div>
          <div className={styles.reference_font}>{reference_font}</div>
        </div>
      </div>
    </>
  )
}


const Social = () => {
  return (
    <>
      <div className={styles.social}>
        <div className={styles.social_content}></div>
        <div className={styles.social_buttons}>
          <Button className={"fa fa-thumbs-up"} text={"Paws Up!"}></Button>
          <Button className={"fa fa-comment"} text={"Meow-back"}></Button>
          <Button className={"fa fa-share"} text={"Share the Cat-titude"}></Button>
        </div>
      </div>
    </>
  )
}
interface ButtonProps {
  className: string
  text: string
}
const Button = ({ className, text }: ButtonProps) => {
  return (
    <>
      <span>
        <i className={className}></i>{text}
      </span>
    </>
  )
}

const App = () => {
  return (
    <>
      <div className={styles.f_card}>
        <div className={styles.header}>
          <div className={styles.options}>
            <i className="fa fa-chevron-down"></i>
          </div>
          <img
            className={styles.co_logo}
            src="https://loremflickr.com/40/40"
          />
          <div className={styles.co_name}>
            <a href="#">Purrfectly Pawsome</a>
          </div>
          <div className={styles.time}>
            <a href="#">Just 9 lives ago</a> · <i className="fa fa-globe"></i>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸
          </p>
        </div>
        <div className={styles.reference}>
          <img className={styles.reference_thumb} src="https://loremflickr.com/476/250" />
          <div className={styles.reference_content}>
            <div className={styles.reference_title}>
              The Ultimate Guide to Napping Like a Cat | CatNapTips
            </div>
            <div className={styles.reference_subtitle}>
              Learn the art of napping, feline style! Just follow these simple tips.
            </div>
            <div className={styles.reference_font}>catnaptips.com</div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.social_content}></div>
          <div className={styles.social_buttons}>
            <span>
              <i className="fa fa-thumbs-up"></i>Paws Up!
            </span>
            <span>
              <i className="fa fa-comment"></i>Meow-back
            </span>
            <span>
              <i className="fa fa-share"></i>Share the Cat-titude
            </span>
          </div>
        </div>
      </div>
      <Card
        logo={"https://loremflickr.com/40/40"}
        name={"Purrfectly Pawsome"}
        time={5}
        content={"Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸"}
        reference_thumb={"https://loremflickr.com/476/250"}
        reference_title={"The Ultimate Guide to Napping Like a Cat | CatNapTips"}
        reference_subtitle={"Learn the art of napping, feline style! Just follow these simple tips."}
        reference_font={"catnaptips.com"}>
      </Card>
    </>
  );
};

export default App;
