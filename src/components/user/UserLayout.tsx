import { AppLayout } from "components/player/AppLayout";
import { UserProfileInfo } from "types/props";
import { UserProfileHeader } from "components/shared/RecordHeader";

export const UserLayout: React.FC<{ user: UserProfileInfo }> = ({ user }) => {
  return (
    <AppLayout>
      <div className="bg-zinc-800 pt-12">
        <UserProfileHeader user={user} />
      </div>
    </AppLayout>
  );
};
