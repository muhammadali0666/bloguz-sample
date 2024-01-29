import "./footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
        <p className="footer-text">Copyright © {new Date().getFullYear()} BlogUz Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
