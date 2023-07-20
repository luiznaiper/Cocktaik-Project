import React from 'react'
import Wrapper from '../assets/wrappers/SearchForm'
import { Form, useNavigation } from 'react-router-dom'

const SearchForm = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue="tequila"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'searching ...' : 'submit'}
        </button>
      </Form>
    </Wrapper>
  )
}

export default SearchForm
