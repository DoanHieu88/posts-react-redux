import {createSlice} from '@reduxjs/toolkit';

const initial = {
    posts: [
        {
            id: 1,
            user: {id: 1, name: 'Doan Hieu', img: 'https://scontent.fhan5-10.fna.fbcdn.net/v/t1.6435-9/160576536_2886948164923178_5493637901177099591_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YeWcNgDWn_kAX9iaOn4&_nc_ht=scontent.fhan5-10.fna&oh=00_AT-ZhkSmijJHywc_H6Cgj0x6VJjsr_rX3BsfaMcVMuX-iA&oe=61E48862'},
            content: 'hello guy', 
            reaction: {
                like: 0,
                heart: 0,
                angry: 0
            }   
        },
        {
            id: 2,
            user: {id: 1, name: 'Doan Hieu', img: 'https://scontent.fhan5-10.fna.fbcdn.net/v/t1.6435-9/160576536_2886948164923178_5493637901177099591_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YeWcNgDWn_kAX9iaOn4&_nc_ht=scontent.fhan5-10.fna&oh=00_AT-ZhkSmijJHywc_H6Cgj0x6VJjsr_rX3BsfaMcVMuX-iA&oe=61E48862'},
            content: 'Aloo', 
            reaction: {
                like: 0,
                heart: 0,
                angry: 0
            }  
        },
    ]
}

const postSlice = createSlice({
    name: 'post',
    initialState: initial,
    reducers: {
        addPost: ((state, action)=>{
            state.posts.push({
                id: state.posts.length +1,
                user: action.payload.userSelected,
                content: action.payload.content,
                reaction: state.posts[0].reaction,
            })
        }),

        reactionAdded: ((state, action) =>{
           const findPost =  state.posts.find(item => item.id === action.payload.id);
           console.log(findPost)
           if(findPost){
                findPost.reaction[action.payload.reaction]+= 1
           }
        }) 
            
    }
})

export const {addPost , reactionAdded} = postSlice.actions
export default postSlice.reducer;
