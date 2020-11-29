import React, {useState} from 'react'

const virginia = {
    population: "8,536,000 in state; 45,553 on Eastern Shore",
    nickname: ["old dominion"],
    admin: "Gov. Ralph Northam",
    newsUrls: [
        "https://www.governor.virginia.gov/newsroom/news-releases/",
    ],
    counties: [
        {
        name: "Accomack", 
        population: 32412, 
        nickname:"", 
        admin: "",
        newsUrls: [
            "https://www.co.accomack.va.us/"
        ],
        cities: [
            {
                name: "Chincoteague", 
                population: 2941, 
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            }, 
            {
                name: "Onancock", 
                population: 1263, 
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Tangier", 
                population: 727, 
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
                },
        ]
        }, 
        {
        name: "Northampton",
        population: 11735,
        nickname: "",
        admin: "",
        newsUrls: [
            "https://www.co.northampton.va.us/"
        ],
        cities: [
            {
                name: "Exmore",
                population: 1460,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Cape Charles",
                population: 1009,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            }
        ]
        }
    ]
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
                <div className="stateHolder">
                    <h3 className="stateInfo">General Info:</h3>
                    <h5 className="stateInfo">population:</h5>
                    <p className="stateInfo">{virginia.population}</p>
                    <h5 className="stateInfo">nickname:</h5>
                    <p className="stateInfo">{virginia.nickname[random]}</p>
                    <h4 className="stateInfo">Counties:</h4>
                    {
                        virginia.counties.map(county =>
                            <div>
                                <p  className="">{county.name}</p>
                                <p  className="">{county.population}</p>
                                <p  className="">{county.nickname}</p>
                            </div>
                        )
                    }
                    <h3 className="stateInfo">News Sources:</h3>
                </div> ) : (null)
                }
                {
                    virginia.counties[0].cities.map(city =>
                        <div>
                            <p  className="">{city.name}</p>
                            <p  className="">{city.population}</p>
                            <p  className="">{city.nickname}</p>
                        </div>
                    )
                }
                {
                    virginia.counties[1].cities.map(city =>
                        <div>
                            <p  className="">{city.name}</p>
                            <p  className="">{city.population}</p>
                            <p  className="">{city.nickname}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Virginia
