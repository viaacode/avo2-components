import { Spacer } from '../Spacer/Spacer.js';

import { Tooltip } from './Tooltip.js';
import { TooltipContent, TooltipTrigger } from './Tooltip.slots.js';

export default {
  title: 'components/Tooltip',

  parameters: {
    jest: ['Tooltip'],
  },
};

export const TooltipTop = () => (
  <div className="u-text-center" style={{ paddingTop: '40px' }}>
    <Tooltip position="top">
      <TooltipTrigger>
        <span>Hover me!</span>
      </TooltipTrigger>
      <TooltipContent>
        <span>This is a tooltip</span>
      </TooltipContent>
    </Tooltip>
  </div>
);

TooltipTop.story = {
  name: 'Tooltip top',
};

export const TooltipRight = () => (
  <div className="u-text-center">
    <Tooltip position="right">
      <TooltipTrigger>
        <span>Hover me!</span>
      </TooltipTrigger>
      <TooltipContent>
        <span>This is a tooltip</span>
      </TooltipContent>
    </Tooltip>
  </div>
);

TooltipRight.story = {
  name: 'Tooltip right',
};

export const TooltipBottom = () => (
  <div className="u-text-center">
    <Tooltip position="bottom">
      <TooltipTrigger>
        <span>Hover me!</span>
      </TooltipTrigger>
      <TooltipContent>
        <span>This is a tooltip</span>
      </TooltipContent>
    </Tooltip>
  </div>
);

TooltipBottom.story = {
  name: 'Tooltip bottom',
};

export const TooltipLeft = () => (
  <div className="u-text-center">
    <Tooltip position="left">
      <TooltipTrigger>
        <span>Hover me!</span>
      </TooltipTrigger>
      <TooltipContent>
        <span>This is a tooltip</span>
      </TooltipContent>
    </Tooltip>
  </div>
);

TooltipLeft.story = {
  name: 'Tooltip left',
};

export const TooltipOffset = () => (
  <Spacer margin="top-extra-large">
    <div className="u-text-center">
      <Tooltip position="right">
        <TooltipTrigger>
          <span>Hover me!</span>
        </TooltipTrigger>
        <TooltipContent>
          <span>standard offset</span>
        </TooltipContent>
      </Tooltip>
    </div>
    <div className="u-text-center">
      <Tooltip position="right" offset={60}>
        <TooltipTrigger>
          <span>Hover me!</span>
        </TooltipTrigger>
        <TooltipContent>
          <span>60 px offset</span>
        </TooltipContent>
      </Tooltip>
    </div>
  </Spacer>
);

TooltipOffset.story = {
  name: 'Tooltip offset',
};

export const TooltipMultiple = () => (
  <>
    <div className="u-text-center">
      <Tooltip position="right">
        <TooltipTrigger>
          <span>Foo</span>
        </TooltipTrigger>
        <TooltipContent>
          <span>Bar</span>
        </TooltipContent>
      </Tooltip>
    </div>
    <div className="u-text-center">
      <Tooltip position="right">
        <TooltipTrigger>
          <span>Marco</span>
        </TooltipTrigger>
        <TooltipContent>
          <span>Polo</span>
        </TooltipContent>
      </Tooltip>
    </div>
  </>
);

TooltipMultiple.story = {
  name: 'Tooltip multiple',
};
