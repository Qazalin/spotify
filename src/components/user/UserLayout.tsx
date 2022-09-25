import { AppLayout } from "components/app/AppLayout";
import { UserProfileInfo } from "types/props";
import { UserProfileHeader } from "components/shared/RecordHeader";

export const UserLayout: React.FC<{ user: UserProfileInfo }> = ({ user }) => {
  return (
    <AppLayout>
      <UserProfileHeader user={user} />
    </AppLayout>
  );
};
