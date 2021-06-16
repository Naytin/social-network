import usersReducer from "./usersReducer";
import {followAC, setUsersAC} from "../actionsCreator/usersAC";

let usersData = [
    {
        "name": "Shubert",
        "id": 1,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false,
        'uniqueUrlName': null
    },
    {
        "name": "Liz",
        "id": 2,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false,
        'uniqueUrlName': null
    },
]

let initialWithoutUsers: usersType
let initialWithUsers: usersType

beforeEach(() => {
    initialWithoutUsers = {
        users: [

        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 2,
        isFetching: false,
        followingInProgress: [],
        filter: 'all'
    };
    initialWithUsers = {
        users: [
            {
                "name": "Shubert",
                "id": 1,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false,
                'uniqueUrlName': null
            },
            {
                "name": "Liz",
                "id": 2,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false,
                'uniqueUrlName': null
            },
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 2,
        isFetching: false,
        followingInProgress: [],
        filter: 'all'
    };

})

test('set users should be correct',() => {
    expect(initialWithoutUsers.users.length).toBe(0)
    const endState = usersReducer(initialWithoutUsers,setUsersAC(usersData))

    expect(endState.users.length).toBe(2)
    expect(endState.users[1].name).toBe("Liz")
    expect(endState.users[0].id).toBe(1)
})

test('user follow should be correct',() => {
    const endState = usersReducer(initialWithUsers,followAC(1))

    expect(endState.users.length).toBe(2)
    expect(endState.users[0].followed).toBe(true)
    expect(endState.users[1].followed).toBe(false)
})




