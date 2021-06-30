import React from 'react'
import { Form, Button, Container, Jumbotron } from 'react-bootstrap'
import './SearchBar.css'

export function SearchBar() {
  return (
    <div className="search-bar">
      <Form>
        <Form.Group>
          <Form.Control
            size="lg"
            type="search"
            placeholder="Search for a drink..."
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  )
}
