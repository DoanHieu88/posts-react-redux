import {createSlice} from '@reduxjs/toolkit';

const initial = {
    user: [
        {id: 1, name: 'Doan Hieu', img: 'https://scontent.fhan5-10.fna.fbcdn.net/v/t1.6435-9/160576536_2886948164923178_5493637901177099591_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YeWcNgDWn_kAX9iaOn4&_nc_ht=scontent.fhan5-10.fna&oh=00_AT-ZhkSmijJHywc_H6Cgj0x6VJjsr_rX3BsfaMcVMuX-iA&oe=61E48862'},
        {id: 2, name: 'Quynh Giang', img: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t1.6435-1/c0.190.320.320a/p320x320/165361696_1481813665491410_8649513331191280887_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=EgPzQKMSwXIAX8-3OPb&_nc_oc=AQl3ylcJ18WyZ3GMyqXG0d3ZsxCyPt9BgVSL9BPJ2vZSdIWiah-LqRp_vdD6gZU9Dm8&_nc_ht=scontent.fhan5-9.fna&oh=00_AT-8CKQCciVQr7HsSeARw5SEMXPnR001FyfgLYcP9EnJ-A&oe=61E4C008'},
        {id: 3, name: 'Van Thanh', img: 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg'},
    ]
}

const userSlice = createSlice({
    name: "user",
    initialState: initial,
    reducers: {}
})

export default userSlice.reducer