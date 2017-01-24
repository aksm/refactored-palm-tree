// import Post from './models/post';

import User from './models/user';

export default function () {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

var John = new User({
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
    name: { 
        first: 'John', 
        last: 'Doe' 
    },
    type: 'Musician',
    genre: 'Indie Rock',
    bio: 'Hello, my name is John Doe and I am an Indie Rock Musician. I have toured the US and Europe. I won some awards too. My mom thinks I am great.'
});
var Pam = new User({
    picture: 'http://www.minifigurenation.com/image/cache/data/pd/minifig/cty337-500x500.jpg',
    name: { 
        first: 'Pamela', 
        last: 'Debutts' 
    },
    type: 'Musician',
    genre: 'Classical',
    bio: 'Hello, my name is Clarinet Girl. I am a fierce clarinet player. Even my cat can\'t handle my musical intensity.'
});
var Joaquin = new User({
    picture: 'http://i.dailymail.co.uk/i/pix/2016/03/04/20/31C6BBBB00000578-3476936-image-m-17_1457121932674.jpg',
    name: { 
        first: 'Joaquin', 
        last: 'Melara' 
    },
    type: 'Poet',
    genre: 'Pizza Poetry',
    bio: 'Hello, my name is Joaquin and I speak the artistic language of pizza.'
});
var Tim = new User({
    picture: 'https://pbs.twimg.com/profile_images/712463875975680000/yUVhpujj.jpg',
    name: { 
        first: 'Tim', 
        last: 'O\'Thee' 
    },
    type: 'Musician',
    genre: 'Metal Rock',
    bio: 'Hello, my name is Tim. I am highly emotional and scream my emotions in the form of music. If you are emotionally unstable, I am your guy.'
});
var Al = new User({
    picture: 'http://www.famousbirthdays.com/faces/jourgensen-al-image.jpg',
    name: { 
        first: 'Albert', 
        last: 'Min' 
    },
    type: 'Comedian',
    genre: 'Developer Humor',
    bio: 'Hello, my name is Al and I am a comedian. My niche is developer humor and I tour IT departments all around the globe.'
});
var Dan = new User({
    picture: 'https://s-media-cache-ak0.pinimg.com/564x/8c/3a/40/8c3a40d4882122d7aa731dd0339f096f.jpg',
    name: { 
        first: 'Daniel', 
        last: 'Milham' 
    },
    type: 'Musician',
    genre: 'Love Ballads',
    bio: 'Hello, my name is Daniel Milham and I don\'t need an introduction. If you don\'t know who I am then ask your mom.'
});
var Users = [John, Pam, Joaquin, Tim, Al, Dan];

    User.create(Users, (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
// export default function () {
//   Post.count().exec((err, count) => {
//     if (count > 0) {
//       return;
//     }

//     const content1 = `Sed ut perspiciatis unde omnis iste natus error
//       sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
//       eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
//       vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//       aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
//       qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
//       ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//       enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
//       ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
//       in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//       occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//       est laborum`;

//     const content2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//       enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
//       ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
//       in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//       occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//       est laborum. Sed ut perspiciatis unde omnis iste natus error
//       sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
//       eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
//       vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//       aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
//       qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
//       ipsum quia dolor sit amet.`;

//     const post1 = new Post({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
//     const post2 = new Post({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

//     Post.create([post1, post2], (error) => {
//       if (!error) {
//         // console.log('ready to go....');
//       }
//     });
//   });
// }