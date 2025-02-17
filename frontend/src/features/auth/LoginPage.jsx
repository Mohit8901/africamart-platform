// src/pages/LoginPage.jsx
import { CountryPhoneInput } from '../components/africa';

export default function LoginPage({ onLogin }) {
  return (
    <div className="login-container">
      <h2>Welcome to AfricaMart</h2>
      <CountryPhoneInput 
        priorityCountries={['NG', 'KE', 'ZA', 'GH']}
        onSubmit={onLogin}
      />
      <div className="africa-alt-auth">
        <button className="whatsapp-btn">
          <img src="/whatsapp-icon.png" alt="WhatsApp" />
          Continue with WhatsApp
        </button>
      </div>
    </div>
  );
}