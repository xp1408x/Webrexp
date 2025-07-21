import { useTranslation } from 'react-i18next';

interface LanguageDropdownProps {
  onClose?: () => void; // Optional onClose prop
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ onClose }) => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    onClose?.(); // Call onClose if provided
  };

  return (
    <select
      className="bg-white border border-gray-300 rounded-md py-2 px-3 text-urbano focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      onChange={handleChange}
      value={i18n.language}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="zh">中文</option>
    </select>
  );
};

export default LanguageDropdown;
