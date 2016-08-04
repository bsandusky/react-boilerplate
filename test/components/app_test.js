import { TestUtils , React, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<App />);
    component = shallowRenderer.getRenderOutput();
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
