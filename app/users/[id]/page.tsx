import React from 'react'
import UserNotFoundPage from './not-found';

interface Props{
    params:{id: number}
}

const UserDetailPage = ({params:{id}}:Props) => {
    if(id >10) UserNotFoundPage();
    return (
    <div>
        userDetailPage{id}
    </div>
    )
}

export default UserDetailPage
