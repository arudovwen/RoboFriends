import React from 'react';
import Card from '../component/Card';




const CardList = ({ robots }) => {

    return (
        <div className='tc'>
            {robots.map((robot, i) => {
                return <Card
                    key={i}
                    id={robots[i].id}
                    username={robots[i].username}
                    name={robots[i].name}
                    email={robots[i].email}
                />
            }

            )}


        </div>
    )

}



export default CardList;