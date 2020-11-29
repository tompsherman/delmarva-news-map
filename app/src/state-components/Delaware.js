import React, {useState} from 'react'

const delaware = {
    population: 973764,
    nickname: ["the small wonder", "the first state", "the blue hen state", "the diamond state"],
    admin: "Gov. John Carney",
    newsUrls: [
        "https://news.delaware.gov",
    ],
    counties: [
        {
        name: "New Castle", 
        population: 558753, 
        nickname:"the DuPont's front lawn", 
        admin: "",
        newsUrls: [
            ""
        ],
        cities: [
            {
            name: "Wilmington", 
            population: 70635, 
            nickname: "little Philidelphia",
            admin: "",
            newsUrls: [
                ""
            ],
            }, 
            {
            name: "Newark", 
            population: 33673, 
            nickname: "Delaware's Library",
            admin: "",
            newsUrls: [
                ""
            ],
            }]
        }, 
        {
        name: "Kent",
        population: 180786,
        nickname: "the Doldrums",
        admin: "",
        newsUrls: [
            "https://www.co.kent.de.us/"
        ],
        cities: [
            {
                name: "Dover",
                population: 38079,
                nickname: "the mistake on the lake",
                admin: "",
                newsUrls: [
                    ""
                ],
            }
        ]
        },
        {
        name: "Sussex",
        population: 234225,
        nickname: "the reason to visit Delaware",
        admin: "",
        newsUrls: [
            "https://sussexcountyde.gov/"
        ],
        cities: [
            {
                name: "Milford",
                population: 11353,
                nickname: "Sussex County's Pearl Necklace",
                admin: "",
                newsUrls: [
                    ""
                ],
            }
        ]
        }
    ]
}

const Delaware = () => {
    const [toggle, setToggle] = useState(false)
    const [boggle, setBoggle] = useState(false)
    const [snoggle, setSnoggle] = useState(false)

    let random = Math.floor(Math.random()*4)

    const deInfo = () => {setToggle(!toggle)}
    const countyInfo = () => {setBoggle(!boggle)}
    const townInfo = () => {setSnoggle(!snoggle)}

    console.log(random)

    return (
        <div>
            <h2 onClick={deInfo}>Welcome to Delaware</h2>
            
            <div className="hidden">
                {toggle? (
                <div className="stateHolder">
                    <h3 className="stateInfo">General Info:</h3>
                    <h5 className="stateInfo">population:</h5>
                    <p className="stateInfo">{delaware.population}</p>
                    <h5 className="stateInfo">nickname:</h5>
                    <p className="stateInfo">{delaware.nickname[random]}</p>
                    <h4 className="stateInfo">Counties:</h4>
                    {
                        delaware.counties.map(county =>
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
                    delaware.counties[0].cities.map(city =>
                        <div>
                            <p  className="">{city.name}</p>
                            <p  className="">{city.population}</p>
                            <p  className="">{city.nickname}</p>
                        </div>
                    )
                }
                {
                    delaware.counties[1].cities.map(city =>
                        <div>
                            <p  className="">{city.name}</p>
                            <p  className="">{city.population}</p>
                            <p  className="">{city.nickname}</p>
                        </div>
                    )
                }
                {
                    delaware.counties[2].cities.map(city =>
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

export default Delaware
