import PropTypes from 'prop-types';
import { ButtonSearch } from 'components/molecules/ButtonSearch/ButtonSearch';
import { InputSearch } from 'components/atoms/InputSearch/InputSearch';
import { FormSearch } from '../FormSearch/FormSearch';
import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <FormSearch onSubmit={onSubmit}>
        <ButtonSearch />
        <InputSearch />
      </FormSearch>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
