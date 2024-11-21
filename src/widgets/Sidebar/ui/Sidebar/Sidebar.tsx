/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/config/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button
				data-testid="sidebar-toggle"
				type="button"
				onClick={onToggle}
			>
				toggle
			</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className="lang" />
			</div>
		</div>
	);
};
