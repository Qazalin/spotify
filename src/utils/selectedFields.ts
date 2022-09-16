export const playlistFields = {
  // playlist fields
  name: true,
  desc: true,
  image: true,
  // user fields
  User: {
    select: {
      name: true,
      id: true, // for a link to click on the user
    },
  },
  // song fields
  songs: {
    select: {
      id: true, // for a link to click on the song
      name: true,
      Album: {
        select: {
          name: true,
          image: true,
          Artist: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  },
};
