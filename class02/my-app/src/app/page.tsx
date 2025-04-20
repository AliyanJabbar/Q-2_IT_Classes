import Heading from "./component/heading"
import SubHeading from "./component/subheading";
import Paragraph from "./component/paragraph";

import styles from "./styles/page.module.css";

// component render hota hai call nhi hota
export default function Home() {
  return (
    <div className={styles.head}>
      {/* passing props in Heading component */}
      <Heading name="Ratan" cast="Lal" age={50}/>
      <SubHeading/>
      <Paragraph text="This is my React Component no.1."/>
      <Heading name="Chaman" cast="Lal" age={60}/>
      <SubHeading/>
      <Paragraph text="This is my React Component no.2."/>
      <Heading name="Gulazari" cast="Lal" age={70}/>
      <SubHeading/>
      <Paragraph text="This is my React Component no.3."/>
    </div>
  );
}

// this pages.tsx is our end point
