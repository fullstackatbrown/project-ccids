const header = `
  <header id="site-header">
    <img src="img/CCIDS.png" alt="CCIDS Logo" width="617" height="97">
    <nav id="site-nav">
      <a href="#">Home</a>
      <a href="#">Members</a>
      <a href="#">Events</a>
      <a href="#">Contact</a>
      <a href="#">Publications</a>
      <a href="#" class="nav-btn">Newsletters</a>
    </nav>
  </header>
`;

const footer = `
  <footer id="site-footer">
    <div id="footer-inner">
      <div id="footer-top-row">
        <img src="img/CCIDS.png" alt="CCIDS Logo" width="617" height="97">
        <nav id="footer-nav">
          <a href="#">Join Us</a>
          <a href="#">Members</a>
          <a href="#">Events</a>
          <a href="#">News</a>
          <a href="#">Publications</a>
        </nav>
        <div id="footer-social">
          <a href="#"><img src="img/LinkedIn.png" alt="LinkedIn"></a>
          <a href="#"><img src="img/Facebook.png" alt="Facebook"></a>
          <a href="#"><img src="img/Twitter.png" alt="Twitter"></a>
        </div>
      </div>
      <div id="footer-bottom-row">
        <div id="footer-contact">
          <p><strong>Contact Us</strong></p>
          <p>Email: brownmocktrial@gmail.com</p>
          <p>Instagram: @brownmocktrial</p>
        </div>
        <div id="footer-subscribe">
          <input type="email" placeholder="Email">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
    <div id="footer-divider"></div>
    <div id="footer-copyright">
      <p>&#169; 2026 <a href="#">Center for Clinical Cancer Informatics and Data Science (CCIDS) at Brown University</a>. All Rights Reserved. &nbsp; <a href="#">Privacy Policy</a></p>
    </div>
  </footer>
`;

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;
