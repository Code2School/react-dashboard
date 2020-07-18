import { useTranslation } from 'react-i18next';

const useTranslator = ({ name, config }) => {
    const { t, i18n } = useTranslation(name);

    config.forEach(({ lang, resource }) => {
        i18n.addResources(lang, name, resource);
    });

    return { t };
};

export default useTranslator;