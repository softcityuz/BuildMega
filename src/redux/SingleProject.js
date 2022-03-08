const SET_SINGLE_Project = "SET_SINGLE_Project";
let initialState = {
  news: null,
};
const ProjectReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_Project:
      return { ...state, news: action.news };

    default:
      return state;
  }
};
export const setProjectSingle = (news) => ({ type: SET_SINGLE_Project, news });
export default ProjectReduser;
