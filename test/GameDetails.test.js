// import React from 'react';
// import TestUtils from 'react-addons-test-utils';
// import { expect } from 'chai';
//
// // import nock from 'nock';
// import mockStore from './helper';
//
// import App from '../js/components/App';
// import GameDetails from '../js/components/GameDetails';
// import {showDetail} from '../js/actions';
// import dummyData from '../js/gamesDummyData';
// describe('GameDetails component', function() {
//   // afterEach(() => {
//   //   nock.cleanAll()
//   // })
//
//     it.only('Should render basic info of game',  function() {
//       const expectGame =  {
//           "id":19169,
//           "name":"Raw Data",
//           "videos":[
//              {
//                 "name":"Trailer",
//                 "video_id":"8phhKZn4DuM"
//              },
//              {
//                 "name":"Gameplay video",
//                 "video_id":"yspH06z0UQU"
//              },
//              {
//                 "name":"Trailer",
//                 "video_id":"qYjYEgo_rkI"
//              }
//           ],
//           "cover":{
//              "url":"//images.igdb.com/igdb/image/upload/t_thumb/bgsqkm80ofh3vru71sic.png",
//              "cloudinary_id":"bgsqkm80ofh3vru71sic",
//              "width":310,
//              "height":310
//           }
//         }
//
//       const store = mockStore({ games: dummyData,
//                                 game: []});
//       store.dispatch(showDetail(19169));
//       expect(store.getState()).to.equal(
//         {
//           games: dummyData,
//           game: expectGame
//         }
//       );
//
//
//         // return store.dispatch(showDetail(1234))
//         //   .then(() => {
//         //     expect(store.getActions()).to.equal(expectGame)
//         //   })
//         // const id = 1234;
//         // const title = "Hello World";
//         // const img = 'http://2017.animationdingle.com/wp-content/uploads/2016/08/hello_world.gif';
//         // const summary = 'Hi this is a summary';
//         // const videoId = 'WoqIRSZ818M';
//         // const renderer = TestUtils.createRenderer();
//         // renderer.render(<GameDetails />);
//         // const result = renderer.getRenderOutput();
//         // console.log(result.props.children);
//         // result.props.className.should.equal('gameCard');
//
//
//     });
// });
