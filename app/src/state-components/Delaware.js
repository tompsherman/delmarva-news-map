import React from 'react'

const delaware = {
    population: 973764,
    nickname: ["the small wonder", "the first state", "the blue hen state", "the diamond state"],
    counties: ["New Castle", "Kent", "Sussex"]
}

const Delaware = () => {

    let random = Math.floor(Math.random()*4)

    console.log(random)

    return (
        <div>
            <h2>Welcome to Delaware</h2>
            <h3>General Info:</h3>
            <h5>population:</h5>
            <p>{delaware.population}</p>
            <h5>nickname:</h5>
            <p>{delaware.nickname[random]}</p>
            <h4>Counties:</h4>
            {
                delaware.counties.map(county =><p>{county}</p>)
            }
            <h3>News Sources:</h3>
        </div>
    )
}

export default Delaware
