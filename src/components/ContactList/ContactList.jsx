import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactListItem from './ContactListItem';
import style from './ContactList.module.css'

const ContactList = () => {

  return (
    <Fragment>
    <ul className={style.list}>
      <ContactListItem
      contacts={useSelector(selectFilteredContacts)}
      />
    </ul>
    </Fragment>
  )
};

export default ContactList;
