import { useState } from 'react';
import Topic from './Topic';
import Header from './Header';
import SubHeader from './SubHeader';
import Question from './Question';
import { HeaderNav, SubHeaderNav } from '/src/assets/data/nav.js';

function navtoTop() {
    window.scrollTo({
      top: 0,
      // behavior: "smooth"
    })
}

function Layout() {
  const [header, setHeader] = useState(HeaderNav[0].value);
  const [subHeader, setSubHeader] = useState(SubHeaderNav[header]);
  const [subHeadSelect, setSubHeadSelect] = useState(
    subHeader && subHeader.length > 0 ? subHeader[1].value : ''
  );

  const headerHandler = (e) => {
    setHeader(e);
    setSubHeader(SubHeaderNav[e]);
    setSubHeadSelect(subHeader[0].value);
  };
  return (
    <>
      <Header headers={HeaderNav} headerHandler={headerHandler} />
      <div className="main_container">
        <SubHeader
          title={header}
          subHeader={subHeader}
          subHeaderHandler={(e) => setSubHeadSelect(e)}
        />
        {/* {console.log('hi', header, subHeader, subHeadSelect)} */}
        {header == 'topic' && <Topic title={subHeadSelect} />}
        {header == 'question' && <Question title={subHeadSelect} />}
      </div>
      <button className="gotop" type='button' onClick={navtoTop}>↑</button>
    </>
  );
}

export default Layout;
