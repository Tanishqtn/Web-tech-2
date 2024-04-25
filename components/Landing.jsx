import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">INTEROFURNISH</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to Interofurnish!</h1>
        <p>
          Interofurnish is your one-stop destination for all your furniture needs. We offer a wide range of high-quality furniture items, from chairs and tables to sofas and more. Our products are designed with a focus on style, comfort, and durability. Whether you're furnishing your new home or updating your current space, you'll find everything you need at Interofurnish. Start exploring our collection today!
        </p>
        <img src="/interior%20design.png" alt="Interior Design" />
        <div className="product">
          <img src="/sofas.jpg" alt="Sofas" />
          <div>
            <h2>Sofas</h2>
            <p>Our sofas are designed for comfort, durability, and style. They are available in a variety of designs and materials to suit your home decor.</p>
            <a href="sofas.html">Show More</a>
          </div>
        </div>
        <div className="product">
          <img src="/chair.jpg" alt="Chairs" />
          <div>
            <h2>Chairs</h2>
            <p>Our chairs are ergonomically designed for maximum comfort. They are perfect for your living room, dining room, or office.</p>
            <a href="chair.html">Show More</a>
          </div>
        </div>
        <div className="product">
          <img src="/table.jpg" alt="Tables" />
          <div>
            <h2>Tables</h2>
            <p>Our tables are sturdy and stylish. They are available in a variety of sizes and designs to fit your space and needs.</p>
            <a href="tables.html">Show More</a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Interofurnish. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
