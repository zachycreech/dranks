import React from 'react'
import './NavigationBar.css'

export function NavigationBar() {
  return (
    <table>
      <tbody>
        <td className="logo">
          <h1>Dranks</h1>
        </td>
        <td className="navigation">
          <a href="#">About</a>
          <a href="https://github.com/zachywheeler" target="_blank">
            Code
          </a>
        </td>
      </tbody>
    </table>
  )
}
