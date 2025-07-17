// components/LanguageSelect.tsx
'use client';

import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ReactCountryFlag from 'react-country-flag';

export function LanguageSelect() {
  const { i18n } = useTranslation();

  const languages = [
    { value: 'en', label: 'English', countryCode: 'US' },
    { value: 'fr', label: 'Français', countryCode: 'FR' },
    { value: 'es', label: 'Español', countryCode: 'ES' },
  ];

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[130px]">
        <SelectValue placeholder="Language">
          {languages.find(lang => lang.value === i18n.language) && (
            <div className="flex items-center gap-2">
              <ReactCountryFlag 
                countryCode={languages.find(lang => lang.value === i18n.language)?.countryCode || 'US'}
                svg
                // style={{ width: '20px', height: '20px' }}
              />
              <span>{languages.find(lang => lang.value === i18n.language)?.label}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <div className="flex items-center gap-2">
              <ReactCountryFlag 
                countryCode={lang.countryCode}
                svg
                // style={{ width: '20px', height: '20px' }}
              />
              {lang.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}