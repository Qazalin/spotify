import { Album, Artist, Song } from "@prisma/client";

export const artistsData: Artist[] = [
  {
    id: "1",
    name: "Taylor Swift",
    image:
      "https://newcountry.nl/images/2022/01/07/taylor-swiftred-taylors-version.jpg",
  },
  {
    id: "2",
    name: "Harry Styles",
    image:
      "https://yt3.ggpht.com/MjEWybBlBXVZigapX__tR_PyJRx-_OGwEZfWZKyS_jJrlgeeF67h69wN2HOhFohiDA7YNeIG=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "3",
    name: "The Weeknd",
    image: "https://i.scdn.co/image/ab6761610000f178b5f9e28219c169fd4b9e8379",
  },
];

export const albums: Album[] = [
  {
    id: "1",
    name: "reputation",
    image: "https://media.s-bol.com/MjENqrVV2lvP/vl5k9A5/550x550.jpg",
    artistId: "1",
    createdAt: new Date(2018, 10, 10),
  },
  {
    id: "2",
    name: "Harry's House",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Harry_Styles_-_Harry%27s_House.png",
    artistId: "2",
    createdAt: new Date(2022, 8, 8),
  },
  {
    id: "3",
    name: "After Hours",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
    artistId: "3",
    createdAt: new Date(2020, 8, 8),
  },
];

export const songsData: Song[] = [
  {
    id: "2",
    name: "As It Was",
    duration: 235,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Harry_Styles_-_Harry%27s_House.png",
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "Delicate",
    duration: 235,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "1",
    image: "https://media.s-bol.com/MjENqrVV2lvP/vl5k9A5/550x550.jpg",
    createdAt: new Date(),
  },
];
