import { CTA } from './CTA.js';
import { CTA_MOCK } from './CTA.mock.js';

export default {
  title: 'components/CTA',

  parameters: {
    jest: ['CTA'],
  },
};

export const Cta = () => <CTA {...CTA_MOCK} />;

Cta.story = {
  name: 'CTA',
};

export const CtaWide = () => <CTA {...CTA_MOCK} width={'100%'} />;

CtaWide.story = {
  name: 'CTA wide',
};

export const CtaNarrow = () => <CTA {...CTA_MOCK} width={'33%'} />;

CtaNarrow.story = {
  name: 'CTA narrow',
};

export const CtaDarkContainer = () => (
  <div className=" u-color-white" style={{ backgroundColor: '#2B414F', padding: '20px' }}>
    <CTA {...CTA_MOCK} />
  </div>
);

CtaDarkContainer.story = {
  name: 'CTA dark container',
};
