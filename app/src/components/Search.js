import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Input, } from 'reactstrap';
import Header from './Header';

import { fetchCharities } from '../store/actions';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';

const Search = () => {
  const initialState = {
    searchTerm: "",
    city: "",
    state: "",
    zipCode: "",
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const [searchFields, setSearchFields] = useForm(initialState);

  const submitSearch = evt => {
    const { 
      searchTerm,
      city,
      state,
      zipCode,
     } = searchFields;

    evt.preventDefault();
    dispatch(fetchCharities(
      searchTerm,
      city,
      state.toUpperCase(),
      zipCode,
    ));
    history.push("/results");
  }

  return (
    <>
      <Header />
      <Form onSubmit={submitSearch} inline className="mt-5 pt-5 col-6">
          <Input onChange={setSearchFields} type="text" className="col-4" name="searchTerm" placeholder="Search" />
          <Input onChange={setSearchFields} type="text" className="col-2" name="city" placeholder="city" />
          <Input onChange={setSearchFields} type="text" className="col-2" name="state" placeholder="state" />
          <Input onChange={setSearchFields} type="text" className="col-2" name="zipCode" placeholder="zipcode" />
          <Button className="col-2">Search</Button>
      </Form>
    </>
  );
}

export default Search;