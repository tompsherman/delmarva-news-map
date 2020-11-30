import React, {useState} from 'react'

const maryland = {
    population: "6,046,000 statewide; 449,226 on Eastern Shore",
    nickname: ["the old line state", "little America"],
    admin: "Gov. Larry Hogan",
    newsUrls: [
        "https://governor.maryland.gov",
    ],
    counties: [
        {
        name: "Worcester County", 
        population: 52276, 
        nickname:"", 
        admin: "",
        newsUrls: [
            ""
        ],
        cities: [
            {
                name: "Ocean City", 
                population: 6927, 
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Berlin",
                population: 4606,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            }, 
            {
                name: "Pocomoke City", 
                population: 4042, 
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            }, 
            {
                name: "Snow Hill",
                population: 2038,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
        ]
        }, 
        {
        name: "Wicomico County",
        population: 103609,
        nickname: "",
        admin: "",
        newsUrls: [
            ""
        ],
        cities: [
            {
                name: "Salisbury",
                population: 32809,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Fruitland",
                population: 5289,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Delmar",
                population: 3231,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Hebron",
                population: 1093,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Mardela Springs",
                population: 348,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Pittsville",
                population: 1465,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Sharptown",
                population: 648,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Willards",
                population: 1011,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
        ]
        },
        {
        name: "Somerset",
        population: 25616,
        nickname: "",
        admin: "",
        newsUrls: [
            ""
        ],
        cities: [
            {
                name: "Princess Anne",
                population: 3523,
                nickname: "",
                admin: "",
                newsUrls: [
                    ""
                ],
            },
            {
                name: "Crisfield",
                population: 2571,
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

const Maryland = () => {
    const [toggle, setToggle] = useState(false)
    
    let random = Math.floor(Math.random()*4)

    const mdInfo = () => {setToggle(!toggle)}

    console.log(random)

    return (
        <div>
            <h2 onClick={mdInfo}>Welcome to Maryland</h2>
            
            <div className="hidden">
                {toggle? (
                <div className="stateHolder">
                    <h3 className="stateInfo">General Info:</h3>
                    <h5 className="stateInfo">population:</h5>
                    <p className="stateInfo">{maryland.population}</p>
                    <h5 className="stateInfo">nickname:</h5>
                    <p className="stateInfo">{maryland.nickname[random]}</p>
                    <h4 className="stateInfo">Counties:</h4>
                    {
                        maryland.counties.map(county =>
                            <div>
                                <p  className="">{county.name}</p>
                                <p  className="">{county.population}</p>
                                <p  className="">{county.nickname}</p>
                                <a href={county.newsUrls}>{county.name} website</a>
                            </div>
                        )
                    }
                    <h3 className="stateInfo">News Sources:</h3>
                    <a href={maryland.newsUrls}>governors office</a>
                </div> ) : (null)
                }
                {
                    maryland.counties[0].cities.map(city =>
                        <div>
                            <p  className="">{city.name}</p>
                            <p  className="">{city.population}</p>
                            <p  className="">{city.nickname}</p>
                        </div>
                    )
                }
                {
                    maryland.counties[1].cities.map(city =>
                        <div>
                            <p  className="">{city.name}</p>
                            <p  className="">{city.population}</p>
                            <p  className="">{city.nickname}</p>
                        </div>
                    )
                }
                {
                    maryland.counties[2].cities.map(city =>
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

export default Maryland
