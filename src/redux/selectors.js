// export const getContacts = state => state.contacts.data;

// export const getFilter = state => state.filters.status;

export const selectContacts = state => state.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filters.status;
