import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {addPost} from '../feature/postsSlice';

export default function Header() {
    const listUsers = useSelector((state)=> state.users.user);
    const dispath = useDispatch();
    const [content, setContent] = useState('')
    const [userSelected, setUserSelected] = useState({});

    const takevalue = (e)=>{
        setContent(e.target.value)
    }

    const selectUser = (id)=>{
        const selected = listUsers.find(item => item.id === id);
        setUserSelected(selected)
    }

    const addNewPost =()=>{
        dispath(addPost({userSelected,content}));
        setContent('');
    }

    return (
        <div className="main">
           <div className="new-post">
               <div className="author">
                    <div className="input-group mb-3">
                        <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img  className=" img-user" src={userSelected.img} alt='' />
                        </button>
                        <ul className="dropdown-menu">
                            {listUsers.map(user => {
                                return(
                                    <li className='dropdown-item' key={user.id} onClick={()=>{selectUser(user.id)}}>{user.name}</li>
                                )
                            })}
                        </ul>
                    </div>
               </div>
               <div className="post">
                   <input className='' placeholder='What are you on mind ?' onChange={takevalue} value={content}/>
                   <button className='btn btn-primary' onClick={addNewPost}>Add Post</button>
               </div>
           </div>
        </div>
    )
}
