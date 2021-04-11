import { render } from '@testing-library/react';

import ModulesCategory from './modules-category';

describe('ModulesCategory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesCategory />);
    expect(baseElement).toBeTruthy();
  });
});
