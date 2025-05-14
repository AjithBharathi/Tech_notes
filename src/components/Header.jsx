function Header({ headers, headerHandler }) {
  const myStyle = {
    header: {
      background: '#2e2e2e',
      padding: '0px 10px',
    },
    navItem: {
      marginRight: '13px',
    },
    navItemP: {
      color: '#fff',
      textTransform: 'capitalize',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <div className="header" style={myStyle.header}>
        <div className="nav_items">
          {headers.map((header, i) => {
            return (
              <div key={i} style={myStyle.navItem}>
                <p
                  style={myStyle.navItemP}
                  key={i}
                  onClick={() => headerHandler(header.value)}
                >
                  {header.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Header;
