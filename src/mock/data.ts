export enum seasons {
  summer = 'Summer',
  autumn = 'Autumn',
  spring = 'Spring',
  winter = 'Winter'
}

const randomAuthor = (count: number) => {
  const array = [];
  const names = ['John Doe', 'Jane Smith', 'Jim Johnson', 'Jill Williams', 'Sarah Davis'];

  for (let i = 0; i < count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];

    array.push({ name });
  }

  return array;
};

const randomUsers = (count: number) => {
  const array = [];
  const firstNames = ['John', 'Jane', 'Jim', '', 'Jill', 'Joe', '', 'Sarah', 'Michael', 'Emily'];
  const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams', '', '', 'Davis', 'Miller', 'Wilson', 'Taylor'];

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * 20 + 20);

    array.push({ firstName, lastName, age });
  }

  return array;
};

const randomPhotos = (count: number) => {
  const array = [];
  const names = ['File 1', 'File 2', 'File 3', '', 'File 4', 'File 6', 'File 7', 'File 8', 'File 9', 'File 10'];
  const descriptions = [
    'This is a sample description for File 1',
    'This is a sample description for File 2',
    'This is a sample description for File 3',
    'This is a sample description for File 4',
    '',
    'This is a sample description for File 5',
    'This is a sample description for File 7',
    'This is a sample description for File 8',
    'This is a sample description for File 9',
    'This is a sample description for File 10'
  ];
  const filenames = ['file_1.txt', 'file_2.txt', 'file_3.txt', 'file_4.txt', 'file_5.txt', 'file_6.txt', 'file_7.txt'];

  for (let i = 0; i < count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    const filename = filenames[Math.floor(Math.random() * filenames.length)];
    const views = Math.floor(Math.random() * 1000);
    const isPublished = Math.random() >= 0.5;

    array.push({ name, description, filename, views, isPublished });
  }

  return array;
};

const randomPhotoMetaData = (count: number) => {
  const array = [];
  const heights = [640, 720, 1080];
  const widths = [480, 675, 800, 1080];
  const orientations = ['portrait', 'landscape'];
  const isCompressed = [true, false];
  const comments = [
    'Amazing scenery in the mountains!',
    'The sunset was breathtaking.',
    'So much fun at the beach with friends!'
  ];

  for (let i = 0; i < count; i++) {
    const height = heights[Math.floor(Math.random() * heights.length)];
    const width = widths[Math.floor(Math.random() * widths.length)];
    const orientation = orientations[Math.floor(Math.random() * orientations.length)];
    const compressed = isCompressed[Math.floor(Math.random() * isCompressed.length)];
    const comment = comments[Math.floor(Math.random() * comments.length)];

    array.push({ height, width, orientation, compressed, comment });
  }

  return array;
};

const albums = [{ name: seasons.summer }, { name: seasons.autumn }, { name: seasons.spring }, { name: seasons.winter }];

const users = randomUsers(20);
const photos = randomPhotos(20);
const photoMetaData = randomPhotoMetaData(20);
const authors = randomAuthor(20);

export default {
  users,
  photos,
  albums,
  photoMetaData,
  authors
};
