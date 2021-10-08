import { render } from '@testing-library/react';

import FrontendBRoutesHomePage from './frontend-b-routes-home-page';

describe('FrontendBRoutesHomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendBRoutesHomePage />);
    expect(baseElement).toBeTruthy();
  });
});
