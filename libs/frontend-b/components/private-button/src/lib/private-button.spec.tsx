import { render } from '@testing-library/react';

import PrivateButtonComponent from './private-button';

describe('PrivateButtonComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrivateButtonComponent />);
    expect(baseElement).toBeTruthy();
  });
});
