import React from 'react'

const Footer = ({ length, selectedCount }) => {
  return (
    <footer>
      <p>{length} List {length === 1 ? "item" : "items"} - {selectedCount} selected</p>
    </footer>
  )
}

export default Footer
