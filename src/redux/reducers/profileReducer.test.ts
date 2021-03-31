import profileReducer from './profileReducer';
import {addNewPostText, addPost, setUserProfile} from "../actionsCreator/profileAC";

let initial: profilePageType
let user: profileUserType;

beforeEach(() => {
    initial = {
        posts: [
            {
                id: 1,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at commodi consequuntur corporis dolore ex nemo nisi quod suscipit!',
                likesCount: 11
            },
            {id: 2, message: 'Goodbye', likesCount: 1},
        ],
        newPostText: 'write something',
        profile: null
    };
    user = {
        "aboutMe": "MarinaSn nn",
        "contacts": {
            "facebook": "пbbb.com",
            "website": "ggg.com",
            "vk": "hh.ru",
            "twitter": "",
            "instagram": null,
            "youtube": null,
            "github": "",
            "mainLink": "nnnn.ru"
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": "ykkkknnnn",
        "fullName": "mahaha",
        "userId": 12,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/12/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/12/user.jpg?v=0"
        }
    }

})


test('new post text must by correct', () => {
    const endState = profileReducer(initial, addNewPostText('my post text'))

    expect(endState.newPostText).toBe('my post text')
    expect(endState.posts.length).toBe(2)
})

test('new post must by added', () => {
    const endState = profileReducer(initial, addPost('111'))

    expect(endState.posts[2].message).toBe('write something')
    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2].id).toBe(4)
})

test('new profile must by added', () => {
    const endState = profileReducer(initial, setUserProfile(user))

    expect(endState.profile?.aboutMe).toBe("MarinaSn nn")
    expect(endState.profile?.userId).toBe(12)
})




