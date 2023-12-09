import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {

  return <LeaderBoard>
    <BoardHeader>
      <BoardTitle>
        <TitleTop>Forbes</TitleTop>
        <TitleBottom>Leader board</TitleBottom>
      </BoardTitle>
    </BoardHeader>

    <LeaderBoardProfiles>
      {list.length > 0 && list.map(({ avatar, name, capital, isIncrease, id }) =>
        <ForbesListItem
          key={id}
          avatar={avatar}
          name={name}
          capital={capital}
          isIncrease={isIncrease}
        />
      )}
    </LeaderBoardProfiles>
  </LeaderBoard>;
};
