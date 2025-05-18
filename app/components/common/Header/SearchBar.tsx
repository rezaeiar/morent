'use client'

import React, { useEffect, useRef } from 'react'
import SearchIcon from './icons/SearchIcon'

type SearchBarProps = {
  type: 'MIDDLE' | 'END'
}

const SearchBar = ({ type }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC')
      const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey

      if (isCmdOrCtrl && e.code === 'KeyK') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className={`${type === 'END' ? 'flex lg:hidden mb-6' : 'hidden lg:flex'} rounded-xl lg:rounded-full px-2.5 border border-secondary-200/40 justify-between items-center`}>
      <div className="flex items-center gap-3 lg:gap-5">
        <div className="py-2.5 text-secondary-400">
          <SearchIcon />
        </div>
        <input
          ref={inputRef}
          type="text"
          className="h-full max-w-80 lg:w-80 outline-none placeholder:text-secondary-400 text-secondary-400 py-2.5"
          placeholder="Search something here"
        />
      </div>
      <div className="hidden lg:block">
        <div className="bg-secondary-800 rounded-2xl text-primary-0 py-1.5 px-2.5 text-xs">
          Ctrl + K
        </div>
      </div>
    </div>
  )
}

export default SearchBar
