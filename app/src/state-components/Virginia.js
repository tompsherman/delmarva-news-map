import React, {useState} from 'react'

const virginia = {
    population: 44200,
    nickname: ["the old dominion"],
    counties: ["Northampton", "Accomack"]
}

const Virginia = () => {
    const [toggle, setToggle] = useState(false)
    const [boggle, setBoggle] = useState(false)
    const [snoggle, setSnoggle] = useState(false)

    let random = Math.floor(Math.random()*4)

    const vaInfo = () => {setToggle(!toggle)}
    const countyInfo = () => {setBoggle(!boggle)}
    const townInfo = () => {setSnoggle(!snoggle)}

    console.log(random)

    return (
        <div>
            <h2 onClick={vaInfo}>Welcome to Virginia</h2>
            
            <div className="hidden">
                {toggle? (
                <div>
                    <h3>General Info:</h3>
                    <h5>population:</h5>
                    <p>{virginia.population}</p>
                    <h5>nickname:</h5>
                    <p>{virginia.nickname[random]}</p>
                    <h4>Counties:</h4>
                    <p onClick={countyInfo}>Northampton</p>
                    <div className="moreHidden">
                                    {boggle? (
                                    <div>
                                        <p>county population</p>
                                        <p>county nickname</p>
                                        <p onClick={townInfo}>this is a town</p>
                                        <div className="mostHidden">
                                            {snoggle? (
                                                <div>
                                                    <p>town population</p>
                                                    <p>town nickname</p>
                                                    <p>other things about the town</p>
                                                </div>
                                            ):(null)}
                                        </div>
                                    </div>
                                    ):(null)}
                    </div>
                    <p onClick={countyInfo}>Accomack</p>
                    
                    <h3>News Sources:</h3>
                </div> ) : (null)
                }
            </div>
        </div>
    )
}

export default Virginia
