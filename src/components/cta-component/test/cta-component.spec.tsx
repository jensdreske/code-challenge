import { newSpecPage } from '@stencil/core/testing';
import { CtaComponent } from '../cta-component';

describe('cta-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CtaComponent],
      html: '<cta-component></cta-component>',
    });
    expect(page.root).toEqualHtml(`
      <cta-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cta-component>
    `);
  });
});
