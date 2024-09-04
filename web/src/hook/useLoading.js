import { useContext } from 'react';
import { LoadingContext } from '../context/loadingContext';

export function useLoading() {
  return useContext(LoadingContext);
}
