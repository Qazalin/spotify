import { AiOutlineClockCircle } from "react-icons/ai";

export const PlaylistTable = () => {
  return (
    <table>
      <th>
        <td>#</td>
        <td>title</td>
        <td>album</td>
        <td>date added</td>
        <td>
          <AiOutlineClockCircle />
        </td>
      </th>
    </table>
  );
};
