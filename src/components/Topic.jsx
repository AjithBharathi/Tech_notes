import { useEffect, useState } from 'react';
import {
  Html,
  Javascript,
  Angular,
  React,
  Node,
  Java,
  SpringBoot,
} from '/src/assets/data/topics/allTopic.js';
import Content from './Content';

function Topic({ title }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    switch (title) {
      case 'htmlcss': {
        setContent(Html);
        break;
      }
      case 'javascript': {
        setContent(Javascript);
        break;
      }
      case 'angular': {
        setContent(Angular);
        break;
      }
      case 'react': {
        setContent(React);
        break;
      }
      case 'nodejs': {
        setContent(Node);
        break;
      }
      case 'java': {
        setContent(Java);
        break;
      }
      case 'springboot': {
        setContent(SpringBoot);
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
    // console.log(alterCntn);
    setContent(alterCntn);
  }

  return (
    <>
      <Content
        title={title}
        content={content}
        setContentHandler={(e) => setContent(e)}
        collapseAllHandler={collapseAllHandler}
        expandAllHandler={expandAllHandler}
      />
    </>
  );
}

export default Topic;
