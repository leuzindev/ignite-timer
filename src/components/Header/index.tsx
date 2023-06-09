import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll, Moon, Sun } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useThemeContext } from '../../contexts/ThemeContext'

export function Header() {
  const { toggleTheme, isDarkTheme } = useThemeContext()
  return (
    <HeaderContainer>
      <div>
        <img src={logoIgnite} alt="" />
        <button onClick={() => toggleTheme()}>
          {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
