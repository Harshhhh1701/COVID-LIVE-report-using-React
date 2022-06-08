import React from 'react'

const Card = ({Data}) => {
  return (
    <>
    {Data.map((curElem)=>{
        const { id,num }=curElem;
        return(
            
        <ul>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        {id}
                    </p>
                    <p className="card__total card__small">{num}</p>
                </div>
            </div>
        </li>
    </ul>
        )
    })}
    
    </>
  )
}

export default Card