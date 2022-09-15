import { Album, Artist, Song } from "@prisma/client";

export const artistsData: Artist[] = [
  {
    id: "1",
    name: "Taylor Swift",
    image: "https://i.scdn.co/image/ab6761610000f178fcf7c334a6e9dcb8555f3663",
  },
  {
    id: "2",
    name: "Harry Styles",
    image: "https://i.scdn.co/image/ab6761610000f178f7db7c8ede90a019c54590bb",
  },
  {
    id: "3",
    name: "The Weeknd",
    image: "https://i.scdn.co/image/ab6761610000f178b5f9e28219c169fd4b9e8379",
  },
  {
    id: "4",
    name: "Halsey",
    image: "https://i.scdn.co/image/ab6761610000f178d707e1c5177614c4ec95a06c",
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
