use effects - cleaning up axios calls  and components for hooks
hooks are options from dependencies that allow different specific jobs like react state and effect or sibgle page like link and such

cards usually have 2 comp list nad card 

use state to help set axios data set usestate to what it will return so []needs empty array {} object needs empty object

use effect << waits until everything renders every time things update
useeffect{() => {
    axios.get('web)
    .then(res){
       const "avg" create state calue one of state to .then
        log(res)
        also use setPart('invoking standard of state)
    } .catch(err) => {
        log(err)
    }

}, [] }  << dependency array to stop running multiple api calls 
return for map
then map data
datares.map{data => {
    return{
        <componenet js and answer key.id of map also iterate over data wanted to reurn thing={state.thing}
        repeat>
    }
}}



for the card 
const Card =props => {
    return(
        <div name and key of props>
            <h2>### {java props,data select}</h2>

        </div>
    )
}
key={} << added a key to help react differ from data from response data>>

dynamic state change from api
setone 
set specific -> this will link to the array at the end of call to the specific part of api that is desired


