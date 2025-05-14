import { useEffect, useState } from 'react';
import {
  HtmlQuestion,
  JavascriptQuestion,
  AngularQuestion,
  ReactQuestion,
  NodeQuestion,
  JavaQuestion,
  SpringBootQuestion,
} from '/src/assets/data/questions/allQuestions.js';
import Content from './Content';

function Question({ title }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    switch (title) {
      case 'htmlcss': {
        setContent(HtmlQuestion);
        break;
      }
      case 'javascript': {
        setContent(JavascriptQuestion);
        break;
      }
      case 'angular': {
        setContent(AngularQuestion);
        break;
      }
      case 'react': {
        setContent(ReactQuestion);
        break;
      }
      case 'nodejs': {
        setContent(NodeQuestion);
        break;
      }
      case 'java': {
        setContent(JavaQuestion);
        break;
      }
      case 'springboot': {
        setContent(SpringBootQuestion);
        break;
      }
    }
  }, [title]);

  function collapseAllHandler() {
    let alterCntn = [...content];
    alterCntn = alterCntn.map((cntn) => {
      cntn.expand = false;
      return cntn;
    });
    setContent(alterCntn);
  }
  function expandAllHandler() {
    let alterCntn = [...content];
    alterCntn = alterCntn.map((cntn) => {
      cntn.expand = true;
      return cntn;
    });
    setContent(alterCntn);
  }

  return (
    <>
      <Content
        title={title}
        content={content}
        setContentHandler={(e) => {
          setContent(e);
        }}
        collapseAllHandler={collapseAllHandler}
        expandAllHandler={expandAllHandler}
      />
    </>
  );
}

export default Question;
