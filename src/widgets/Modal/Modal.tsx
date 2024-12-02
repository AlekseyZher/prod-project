/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
import { classNames } from 'shared/config/lib/classNames/classNames';
import {
	ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
	const {
		className, children, isOpen, onClose,
	} = props;

	const [isClousing, setIsClousing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClousing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClousing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler();
		}
	}, [closeHandler]);

	const onClickContent = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClousing]: isClousing,
	};

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div onClick={closeHandler} className={cls.overlay}>
					<div onClick={onClickContent} className={cls.content}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
