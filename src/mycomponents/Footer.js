import React from 'react'

export default function Footer() {
  let footerStyle={
    position:"relative",
    top:"15vh",
    width:"100%",
    border:"5px solid violet"
  }
  return (
    <footer className=' bg-dark text-light py-4 my-2 'style={footerStyle}>
      <p className='text-center'>Copyright &copy; MyToDoList.com</p>
    </footer>
  )
}

