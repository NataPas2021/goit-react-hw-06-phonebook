export const getAllContacts = store => store.contacts;

export const getFilteredContacts = store => {
    const {contacts, filter} = store;
    if(!filter) {
        return contacts;
      }
      const normalizedFilter = filter.toLowerCase();
  
      return contacts.filter(({name}) => 
        name.toLowerCase().includes(normalizedFilter),
      );
};