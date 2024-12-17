import React, { useState, useEffect, useRef } from 'react';
import { getAllCountries } from '../../utils/js/apiCallController'; 

const CountryAutocomplete = ({ value, onChange, onFocus, onBlur, className = ''}) => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const wrapperRef = useRef(null);
  
    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const data = await getAllCountries();
            if (data) {
              setCountries(data);
              if (value) {
                const selectedCountry = data.find(country => country.country_id === value);
                if (selectedCountry) {
                  setInputValue(selectedCountry.name);
                }
              }
            }
          } catch (error) {
            console.error('Error loading countries:', error);
          } finally {
            setIsLoading(false);
          }
        };
      
        fetchCountries();
      }, [value]); 
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
      
      if (!value.trim()) {
        onChange({ target: { name: 'country_id', value: null } });
      }
      
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(value.toLowerCase())
      );
      
      setFilteredCountries(filtered);
      setIsOpen(true);
    };
  
    const handleCountrySelect = (country) => {
      setInputValue(country.name);
      const countryId = parseInt(country.country_id, 10);
        console.log('Sending country_id:', countryId);
      onChange({ 
        target: { 
          name: 'country_id', 
          value: countryId
        } 
      });
      setIsOpen(false);
    };
  
    const handleFocus = (e) => {
      setIsFocused(true);
      setIsOpen(true);
      if (onFocus) onFocus(e);
    };
  
    const handleBlur = (e) => {
      setTimeout(() => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
      }, 200);
    };
  
    return (
      <div className={`form-group relative ${className}`} ref={wrapperRef}>
        <div className="input-container">
          {(isFocused || inputValue) && (
            <label 
              htmlFor="country_id"
              className={`absolute text-sm text-gray-600 transition-all
                ${isFocused || inputValue ? '-top-6 left-0' : 'top-2 left-2'}`}
            >
              COUNTRY
            </label>
          )}
          <input
            type="text"
            id="country_id"
            name="country_id"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={isFocused ? '' : 'COUNTRY'}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
            autoComplete="off"
            required
          />
        </div>
  
        {isOpen && filteredCountries.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredCountries.map((country) => (
              <li
                key={country.country_id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCountrySelect(country)}
              >
                {country.name}
              </li>
            ))}
          </ul>
        )}
  
        {isLoading && (
          <div className="text-sm text-gray-500 mt-1">Loading countries...</div>
        )}
      </div>
    );
  };
  
  export default CountryAutocomplete;