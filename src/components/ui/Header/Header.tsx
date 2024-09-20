import Image from 'next/image'
import Link from 'next/link'
import './Header.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <Link href="/">
            <Image src="/_static/logo.png" width={150} height={36} alt="Logo" />
          </Link>
        </div>
        <div className="header-welcome">Bem-vindo de volta, Marcus</div>
        <div className="header-data">Segunda, 01 de dezembro de 2025</div>
      </div>
    </header>
  )
}
export default Header
