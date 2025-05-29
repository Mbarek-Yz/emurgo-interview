const en = {
  global: {
    locale: 'en',
    no_data: 'No results found',
    yes: 'Yes',
    no: 'No',
    placeholder: 'Type your text here',
    description: 'Description:',
    try_again: 'Try again',
    empty_list: {
      title: 'No results found',
      description: 'Try again',
    },
    ok: 'Ok',
    login: 'Login',
    logout: 'Logout',
    popup_logout: 'Are you sure you want to log out?',
    cancel: 'Cancel',
    content: 'Content:',
  },
  error: {
    error: 'Error',
    server: 'An error has occurred!',
    network: 'Please check your internet connection!',
    required_field: 'This field is required',
    username_required: 'Username required',
    password_required: 'Pssword required',
    login_failed: 'Login failed',
  },
  home: {
    title: 'Welcome Emurgo!',
    search_placeholder: 'Search...',
    select_language: 'Select language',
  },
  article: {
    see_more: 'Click to see more',
    author: 'Author: ',
    source: 'Souce: ',
  },
};

export default en;

export type TranslationsType = typeof en;
