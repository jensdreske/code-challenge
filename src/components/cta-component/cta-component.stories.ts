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
  imageContent = text('unsplash search term', 'mountains, hiking'),
  ctaTitle = text('Call to action title', 'Example Title'),
  ctaText = text(
    'Call to action text',
    'A descriptive text could be nice here.',
  ),
  linkText = text('Button link text', 'Click Me, now!'),
}: {
  imageContent?: string;
  ctaTitle?: string;
  ctaText?: string;
  linkText?: string;
} = {}): string => `
  <cta-component 
      cta-title="${ctaTitle}" 
      cta-text="${ctaText}" 
      link-text="${linkText}" 
      image-Searchterm="${imageContent}">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet laudantium sunt reiciendis cum neque repudiandae deserunt nobis necessitatibus, quia, rerum laborum a nostrum mollitia fuga provident omnis voluptates odio
      </cta-component>
`;
