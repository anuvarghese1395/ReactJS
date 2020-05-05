import React, { Component } from 'react';
import PostData from '../data/weddingInvitation.json';

class listData extends Component{
    render(){
        return(
            <div>
                <h1>Anu Varghese</h1>
                {PostData.map((postDetail,index)=>{
                    return <h1>{postDetail.name}</h1>

                })}
            </div>
        )
    }
}

export default listData;