import { Album, Artist, Playlist, Song } from "@prisma/client";

export const artistsData: Artist[] = [
  {
    id: "1",
    name: "Taylor Swift",
    image: "https://i.scdn.co/image/ab6761610000f178fcf7c334a6e9dcb8555f3663",
    isVerified: true,
  },
  {
    id: "2",
    name: "Harry Styles",
    image: "https://i.scdn.co/image/ab6761610000f178f7db7c8ede90a019c54590bb",
    isVerified: true,
  },
  {
    id: "3",
    name: "The Weeknd",
    image: "https://i.scdn.co/image/ab6761610000f178b5f9e28219c169fd4b9e8379",
    isVerified: true,
  },
  {
    id: "4",
    name: "Halsey",
    image: "https://i.scdn.co/image/ab6761610000f178d707e1c5177614c4ec95a06c",
    isVerified: true,
  },
];

export const albums: Album[] = [
  {
    id: "1",
    name: "reputation",
    image: "https://i.scdn.co/image/ab67616d00001e02da5d5aeeabacacc1263c0f4b",
    artistId: "1",
    createdAt: new Date(2018, 10, 10),
  },
  {
    id: "2",
    name: "folklore",
    image: "https://i.scdn.co/image/ab67616d00001e0295f754318336a07e85ec59bc",
    artistId: "1",
    createdAt: new Date(2021, 10, 10),
  },
  {
    id: "3",
    name: "1989",
    image: "https://i.scdn.co/image/ab67616d00001e029abdf14e6058bd3903686148",
    artistId: "1",
    createdAt: new Date(2015, 10, 10),
  },
  {
    id: "4",
    name: "lover",
    image: "https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647",
    artistId: "1",
    createdAt: new Date(2020, 10, 10),
  },
  {
    id: "5",
    name: "Harry's House",
    image: "https://i.scdn.co/image/ab67616d00001e022e8ed79e177ff6011076f5f0",
    artistId: "2",
    createdAt: new Date(2022, 8, 8),
  },
  {
    id: "6",
    name: "Fine Line",
    image: "https://i.scdn.co/image/ab67616d00001e0277fdcfda6535601aff081b6a",
    artistId: "2",
    createdAt: new Date(2020, 8, 8),
  },
  {
    id: "7",
    name: "hopeless fountain kingdom",
    image: "https://i.scdn.co/image/ab67616d00001e02ad339a1a63c98dd2091a222f",
    artistId: "4",
    createdAt: new Date(2020, 8, 8),
  },
];

export const songsData: Song[] = [
  {
    id: "1",
    name: "As It Was",
    duration: 269,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "5",
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Delicate",
    duration: 236,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "1",
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "End Game",
    duration: 315,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "1",
    createdAt: new Date(),
  },
  {
    id: "4",
    name: "Alone",
    duration: 305,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "7",
    createdAt: new Date(),
  },
  {
    id: "5",
    name: "Now Or Never",
    duration: 205,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "7",
    createdAt: new Date(),
  },
  {
    id: "6",
    name: "Sorry",
    duration: 315,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "7",
    createdAt: new Date(),
  },
  {
    id: "8",
    name: "Matilda",
    duration: 232,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "5",
    createdAt: new Date(),
  },
  {
    id: "9",
    name: "Cardigan",
    duration: 205,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "2",
    createdAt: new Date(),
  },
  {
    id: "10",
    name: "August",
    duration: 215,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "2",
    createdAt: new Date(),
  },
  {
    id: "12",
    name: "Falling",
    duration: 335,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "6",
    createdAt: new Date(),
  },
  {
    id: "13",
    name: "Lover",
    duration: 295,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "4",
    createdAt: new Date(),
  },
  {
    id: "14",
    name: "I Forgot That You Existed",
    duration: 245,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "4",
    createdAt: new Date(),
  },
  {
    id: "15",
    name: "Call It What You Want",
    duration: 222,
    url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
    albumId: "1",
    createdAt: new Date(),
  },
];
