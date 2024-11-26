import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/lib/tests/componentsRender/componentsRender';
import { renderWidthTranslations }
	from 'shared/config/lib/tests/renderWidthTranslations/renderWidthTranslations';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
	test('test render', () => {
		componentRender(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('test sidebar toggle', () => {
		componentRender(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
