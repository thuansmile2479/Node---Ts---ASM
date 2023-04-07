import React from 'react';
import { Outlet } from 'react-router-dom';

const WebsiteLayout = () => {
  return (
    <div>
      <header>
        {/* <nav>
                    <ul>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                    </ul>
                </nav> */}
        <div className="banner">
          <img src="https://picsum.photos/1550/200" alt="" />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer> 
        <p style={{textAlign: 'center'}}>Bùi Đình Đức@ thank you</p>
      </footer>
    </div>
  );
};

export default WebsiteLayout;
