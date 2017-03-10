import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import App from '../js/components/App';

describe('Image component', function() {
    it('Renders hello world in root',  function() {
        const hello = "Hello World";
        const renderer = TestUtils.createRenderer();
        renderer.render(<App title={hello} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card');

    });
});
