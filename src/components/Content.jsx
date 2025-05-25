function Content({
  title,
  content,
  setContentHandler,
  expandAllHandler,
  collapseAllHandler,
}) {
  return (
    <>
      <div className="content_container">
        <div className="content_title_box">
          <p className="content_title">{title}</p>
          <div>
            <button onClick={expandAllHandler}>expand all</button>
            <button onClick={collapseAllHandler}>collapse all</button>
          </div>
        </div>
        <div className="content_grp">
          {content.map((cntn, c_key) => {
            if (cntn.topic) {
              return (
                <div
                  className={`content_item ${
                    cntn.expand && cntn.expand == true ? 'expanded' : ''
                  }`}
                  key={c_key}
                >
                  {/* topic  */}
                  <div
                    className="content_item_topic"
                    onClick={() => {
                      cntn.expand
                        ? (cntn.expand = !cntn.expand)
                        : (cntn.expand = true);
                      setContentHandler([...content]);
                    }}
                  >
                    <p className="topic_label">{cntn.topic}</p>
                    <span className="topic_indicator"></span>
                  </div>
                  {/* detail  */}
                  <div className="content_item_detail">
                    {cntn.points && cntn.points.length > 0 && (
                      <ul className="ul_list">
                        {cntn.points.map((point, p_key) => {
                          // heading
                          if (point.includes('h::')) {
                            return (
                              <li
                                className={`li_item  li_item_head`}
                                key={p_key}
                              >
                                {point.replace('h::', '')}
                              </li>
                            );
                          }
                          // code
                          else if (point.includes('code::')) {
                            return (
                              <li
                                className={`li_item  li_item_code`}
                                key={p_key}
                              >
                                <pre className="code_tag">
                                  {point.replace('code::', 'code:').trim()}
                                </pre>
                              </li>
                            );
                          }
                          // hr line
                          else if (point.includes('hr::')) {
                            return <hr key={p_key} className="li_item_line" />;
                          }
                          // normal point
                          else {
                            return (
                              <li className={`li_item `} key={p_key}>
                                {point}
                              </li>
                            );
                          }
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Content;
