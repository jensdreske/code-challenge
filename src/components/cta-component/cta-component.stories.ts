import { text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'cta-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: ['cta-component.spec.tsx', 'cta-component.e2e.ts'],
  },
  decorators: [jsxDecorator],
};

export const empty = ({
  ctaImage = text(
    'Image Source',
    'https://source.unsplash.com/featured/800x450/?mountains, climbing',
  ),
  ctaImageAlt = text('alt text', 'a random image'),
  ctaTitle = text('Call to action title', 'Example Title'),
  ctaText = text(
    'Call to action text',
    'A descriptive text could be nice here.',
  ),
  linkText = text('Button link text', 'Click Me, now!'),
}: {
  ctaImage?: string;
  ctaImageAlt?: string;
  ctaTitle?: string;
  ctaText?: string;
  linkText?: string;
} = {}): string => `
  <cta-component 
      cta-title="${ctaTitle}" 
      cta-text="${ctaText}" 
      link-text="${linkText}" 
      image-Link="${ctaImage}"
      image-alt="${ctaImageAlt}">
      </cta-component>
`;
