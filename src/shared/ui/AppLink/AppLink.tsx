import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/config/lib/classNames/classNames';
import { FC } from 'react';
import cls from './AppLinl.module.scss';

export const enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		to,
		children,
		className,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
};
