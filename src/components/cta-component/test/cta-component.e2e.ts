import { newE2EPage } from '@stencil/core/testing';

describe('cta-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cta-component></cta-component>');

    const element = await page.find('cta-component');
    expect(element).toHaveClass('hydrated');
  });
});
