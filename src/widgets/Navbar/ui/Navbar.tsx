import { classNames } from 'shared/config/lib/classNames/classNames';
import { Modal } from 'widgets/Modal/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{ t('Войти') }
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{ t('Lorem ipsum dolor sit amet consectetur adipisicing elit.')}
			</Modal>
		</div>
	);
};
