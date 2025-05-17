import React from 'react'
import { useTheme } from 'next-themes'

export default function ThemeTest() {

    const { theme, setTheme } = useTheme();

    return (



        <div className='bg' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus neque, quae similique est ab!</p>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change Theme</button>
        </div>
    )
}
