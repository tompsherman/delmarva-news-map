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
            },
            {
                name: "Lewes",
                population: 3233,
                nickname: "first town of the first state",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Rehoboth Beach",
                population: 1520,
                nickname: "the Nation's summer capitol",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Seaford",
                population: 7861,
                nickname: "Nylon Capitol of the World",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Georgetown",
                population: 7427,
                nickname: "Sussex County's admin",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Millsboro",
                population: 4446,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Bridgeville",
                population: 0,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Laurel",
                population: 0,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Delmar",
                population: 0,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            
        ]
        }
    ]
}

const Delaware = () => {
    const [toggle, setToggle] = useState(false)
    
    let random = Math.floor(Math.random()*4)

    const deInfo = () => {setToggle(!toggle)}

    console.log(random)

    return (
        <div>
            <h2 onClick={deInfo}>Welcome to Delaware</h2>
            
            <div className="hidden">
                {toggle? (
                <div className="boxContainer">
                    <h3 className="">General Info:</h3>
                    <div className="stateHolder">
                        <h5 className="stateInfo">population:</h5>
                        <p className="stateInfo">{delaware.population}</p>
                    </div>
                    <div className="stateHolder">
                        <h5 className="stateInfo">nickname:</h5>
                        <p className="stateInfo">{delaware.nickname[random]}</p>
                    </div>
                    <h4 className="">Counties:</h4>
                    <div className="stateHolder">
                        {
                            delaware.counties.map(county =>
                                <div>
                                    <p  className="">{county.name}</p>
                                    <p  className="">{county.population}</p>
                                    <p  className="">{county.nickname}</p>
                                    <a href={county.newsUrls}>{county.name} website</a>
                                </div>
                            )
                        }
                    </div>
                    <h3 className="">News Sources:</h3>
                    <div className="stateHolder">
                        <a href={delaware.newsUrls}>state news room</a>
                    </div>

                </div> ) : (null)
                }
                <div className="stateHolder">
                    {
                        delaware.counties[0].cities.map(city =>
                            <div className="">
                                <p  className="">{city.name}</p>
                                <p  className="">{city.population}</p>
                                <p  className="">{city.nickname}</p>
                            </div>
                        )
                    }
                    {
                        delaware.counties[1].cities.map(city =>
                            <div className="">
                                <p  className="">{city.name}</p>
                                <p  className="">{city.population}</p>
                                <p  className="">{city.nickname}</p>
                            </div>
                        )
                    }
                    {
                        delaware.counties[2].cities.map(city =>
                            <div className="">
                                <p  className="">{city.name}</p>
                                <p  className="">{city.population}</p>
                                <p  className="">{city.nickname}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Delaware
