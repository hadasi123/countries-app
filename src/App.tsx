import Search from './components/search'
import Sort from './components/sort'
import CountriesGrid from './components/countriesGrid'
import Loader from './components/loader'
import GeneralError from './components/generalError'
import { useCountries } from './hooks/useCountries'
import './App.css'

function App() {
  const { countries, loading, error, handleSearch, handleSort } = useCountries();

  return (
    <div className="app">
      <h1>Countries Of The World</h1>
      <div className="controls">
        <Search onSearch={handleSearch} />
        <Sort onSort={handleSort} />
      </div>
      {loading ? <Loader /> : error ? <GeneralError /> : <CountriesGrid countries={countries} />}
    </div>
  );
}

export default App
