/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { classNames } from 'shared/config/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR_INVERTED = 'clearInverted',
  CLEAR = 'clear',
  BACKGROUND = 'background',
  BACKGROUND_INVERTEED = 'backgroundInverted',
}

export enum ButtonSize {
	L = 'size_l',
	M = 'size_m',
	XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className, theme, square, size, children, ...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
