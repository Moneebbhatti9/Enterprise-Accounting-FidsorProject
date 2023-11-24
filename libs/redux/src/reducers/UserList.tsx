import { UserListProps } from '@crema/models/Apps';
import { GET_USER_LIST } from '@crema/actions/UserList.actions';
import { AppActions } from '@crema/actions';

const initialState: { usersList: UserListProps[] } = {
  usersList: [],
};

const userListReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        usersList: action.payload,
      };

    default:
      return state;
  }
};
export default userListReducer;
