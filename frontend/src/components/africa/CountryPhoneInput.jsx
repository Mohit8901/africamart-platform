// src/components/africa/CountryPhoneInput.jsx
import { countryCodes } from '../../../data/africanCountries';

export default function CountryPhoneInput({ onSubmit }) {
  const [selectedCountry, setSelectedCountry] = useState('NG');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    const fullNumber = `+${countryCodes[selectedCountry]}${phone}`;
    onSubmit(fullNumber);
  };

  return (
    <div className="phone-input">
      <select 
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {Object.entries(countryCodes).map(([code, dialCode]) => (
          <option key={code} value={code}>
            {code} (+{dialCode})
          </option>
        ))}
      </select>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
        placeholder="Enter phone number"
      />
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}