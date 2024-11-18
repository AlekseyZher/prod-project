/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/config/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
	<div className={classNames(cls.Navbar, {}, [className])}>
		<div className={cls.links}>
			<AppLink to="/" className={cls.mainLink}>
				Главная
			</AppLink>
			<AppLink to="/about">О сайте</AppLink>
		</div>
	</div>
);
