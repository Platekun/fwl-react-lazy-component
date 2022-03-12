// 💡 https://jestjs.io/docs/api
import { afterEach, describe, expect, it } from '@jest/globals';
import { cleanup, render, waitFor } from '@testing-library/react';
import React from 'react';
import Lazy from '../source';

afterEach(cleanup);

describe('Lazy', () => {
  it('should exist.', () => {
    expect(Lazy).not.toBeUndefined();
  });

  it('should render without issues.', async () => {
    const { findByText } = render(<Lazy getComponent={() => import('./Test')} fallback={<p>Loading</p>} />);

    await findByText(/Loading/i);
    await waitFor(() => findByText(/Hello/i));
  });
});
