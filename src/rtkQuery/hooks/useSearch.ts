import {useState} from 'react';

import {DEBOUNCE_DELAY} from '_utils/constants';
import useDebounceText from './useDebounceText';

export const useSearch = (defaultValue?: string) => {
  const [searchText, setSearchText] = useState(defaultValue ?? '');
  const debouncedSearchText = useDebounceText(searchText, DEBOUNCE_DELAY);
  return {setSearchText, searchText, debouncedSearchText};
};
