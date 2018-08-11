import { USER_LOGIN } from "../actions/types";

const initialState = {
    username: "Anonimous",
    email: "None",
    password: '',
    phone: '',
    firstName: '',
    lastName: '',
    image: 'https://previews.123rf.com/images/sudowoodo/sudowoodo1703/sudowoodo170300064/75253395-anonymous-user-icon-black-silhouette-of-man-in-business-suit-with-question-mark-on-face-profile-pict.jpg',
    loggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                image: 'https://previews.123rf.com/images/sudowoodo/sudowoodo1703/sudowoodo170300064/75253395-anonymous-user-icon-black-silhouette-of-man-in-business-suit-with-question-mark-on-face-profile-pict.jpg'
            };
        default:
            return state;
    }
}
