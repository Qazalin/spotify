import { AppLayout } from "components/app/AppLayout";
import { UserProfileInfo } from "types/props";
import { HeaderWrapper } from "@spotify/components/shared/Wrappers/HeaderWrapper";

export const UserLayout: React.FC<{ user: UserProfileInfo }> = ({ user }) => {
  return (
    <AppLayout>
      <HeaderWrapper
        type="profile"
        heading={user.name}
        isRounded={true}
        imgSrc={user.image}
      >
        <div className="flex absolute bottom-2 items-center">
          <a
            className="text-sm capitalize text-zinc-300"
            href="https://open.spotify.com/user/31wsxmhc25wkyn7vftepkw4raw5e"
            target="_blank"
            rel="noreferrer"
          >
            {user.artists.length} following
          </a>
        </div>
      </HeaderWrapper>
    </AppLayout>
  );
};
