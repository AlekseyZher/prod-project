import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/config/lib/classNames/classNames';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			onClick={toggle}
			theme={ButtonTheme.CLEAR}
			className={classNames('', {}, [className])}
		>
			{t(short ? 'Короткий язык' : 'Язык')}
		</Button>
	);
};
