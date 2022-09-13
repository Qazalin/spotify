import { LoadingScreen } from "components/shared/LoadingScreen";
import { UserLayout } from "components/user/UserLayout";

import { trpc } from "utils/trpc";

const UserPage = () => {
  /* 
  const { data: user, isLoading } = trpc.useQuery(["user.getMe"]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (user) {
    console.log(user);
    return <UserLayout user={user} />;
  }
  return <div>error</div>;
  */
  const user = {
    name: "qazal",
    image:
      "https://cdn.discordapp.com/avatars/900033361089818675/814b2a0cafd2fcaf42843222d7c3e2c0.png",
    artists: [
      {
        id: "cl7xc6yxo00010ia9dww3boet",
        name: "Harry Styles",
        image:
          "https://yt3.ggpht.com/MjEWybBlBXVZigapX__tR_PyJRx-_OGwEZfWZKyS_jJrlgeeF67h69wN2HOhFohiDA7YNeIG=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: "cl7xc6yxo00020ia9ea4keugd",
        name: "Taylor Swift",
        image:
          "https://newcountry.nl/images/2022/01/07/taylor-swiftred-taylors-version.jpg",
      },
      {
        id: "cl7xcbmvq0000f9a9f2z8iho7",
        name: "The Weeknd",
        image:
          "https://i.scdn.co/image/ab6761610000f178b5f9e28219c169fd4b9e8379",
      },
      {
        id: "cl7xcbmvq0004f9a9fhy8bl1i",
        name: "Harry Styles",
        image:
          "https://yt3.ggpht.com/MjEWybBlBXVZigapX__tR_PyJRx-_OGwEZfWZKyS_jJrlgeeF67h69wN2HOhFohiDA7YNeIG=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: "cl7xcbmvr0002f9a9dw855ee5",
        name: "Taylor Swift",
        image:
          "https://newcountry.nl/images/2022/01/07/taylor-swiftred-taylors-version.jpg",
      },
      {
        id: "cl7xcdxyo0000hxa9pqrlkxcj",
        name: "Harry Styles",
        image:
          "https://yt3.ggpht.com/MjEWybBlBXVZigapX__tR_PyJRx-_OGwEZfWZKyS_jJrlgeeF67h69wN2HOhFohiDA7YNeIG=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: "cl7xcdxyo0002hxa93ztebvko",
        name: "The Weeknd",
        image:
          "https://i.scdn.co/image/ab6761610000f178b5f9e28219c169fd4b9e8379",
      },
    ],
    playlists: [
      {
        id: "cl7xce9i20091hxa97lrwssci",
        name: "Playlist #1",
        userId: "cl7wzbcim0006una9qxzu8hvw",
      },
      {
        id: "cl7xce9i20092hxa9oxs9g4co",
        name: "Playlist #2",
        userId: "cl7wzbcim0006una9qxzu8hvw",
      },
      {
        id: "cl7xce9i20095hxa9dhmg5fdz",
        name: "Playlist #3",
        userId: "cl7wzbcim0006una9qxzu8hvw",
      },
      {
        id: "cl7xce9i30097hxa9t3ud3q8l",
        name: "Playlist #4",
        userId: "cl7wzbcim0006una9qxzu8hvw",
      },
    ],
  };
  return <UserLayout user={user} />;
};

export default UserPage;
