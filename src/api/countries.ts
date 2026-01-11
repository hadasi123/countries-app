const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,population,flags';


export type Country = {
  name: string;
  capital: string;
  population: number;
  flagUrl: string;
};

type RestCountriesResponse = {
  name: {
    common: string;
  };
  capital?: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
};

export const fetchAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch countries: ${response.status}`);
    }
    
    const data: RestCountriesResponse[] = await response.json();
    const countries: Country[] = data.map((country) => ({
      name: country.name.common,
      capital: country.capital?.[0] || 'N/A',
      population: country.population,
      flagUrl: country.flags.svg,
    }));
    
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};