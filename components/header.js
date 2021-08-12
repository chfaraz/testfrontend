const Header = () => {
    return (
        <div className="header">
            <h1>Dorpee</h1>
            <div className="wrap">
                <h3>find a workspace</h3>
                <div className="profile">
                    <img src="./profile.png" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>
        </div>
    );
};

export default Header;
