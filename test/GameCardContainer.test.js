import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import App from '../js/components/App';
import GameCard from '../js/components/GameCard';
import GameCardContainer from '../js/components/GameCardContainer';

describe('GameCardContainer component', function() {
    it('Should render a single GameCard',  function() {
        const id = 1234;
        const title = "Hello World";
        const img = 'http://2017.animationdingle.com/wp-content/uploads/2016/08/hello_world.gif';
        const summary = 'Hi this is a summary';
        const videoId = 'WoqIRSZ818M';
        const renderer = TestUtils.createRenderer();
        renderer.render(<GameCardContainer img={img} id={id} title={title} summary={summary} videoId={videoId} />);
        const result = renderer.getRenderOutput();
        result.props.img.should.equal(img);
        result.props.id.should.equal(id);
        result.props.title.should.equal(title);
        result.props.summary.should.equal(summary);
        result.props.videoId.should.equal(videoId);


    });
});
