function SubHeader({ title, subHeader, subHeaderHandler }) {
  return (
    <>
      {/* category title  */}
      <div className="title">
        <h2 style={{ textTransform: 'capitalize' }}>{title}</h2>
      </div>
      {/* content titles */}
      <div className="content_titles">
        {subHeader.map((item, i) => {
          return (
            <span
              className="topic_item"
              key={i}
              onClick={() => subHeaderHandler(item.value)}
            >
              {item.label}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default SubHeader;
