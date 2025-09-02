import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDarkMode ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-1.5 border border-gray-500 rounded-full"
    >
      {theme === 'dark' ? (
        <img src={assets.sun_icon} className="size-7.5" alt="Switch to light mode" />
      ) : (
        <img src={assets.moon_icon} className="size-7.5" alt="Switch to dark mode" />
      )}
    </button>
  )
}

export default ThemeToggleBtn