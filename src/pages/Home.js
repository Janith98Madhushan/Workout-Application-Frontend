import {useEffect} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

import WorkoutDetails from '../components/WorkoutsDetails'

import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    
    const {workouts,dispatch} = useWorkoutsContext()

    useEffect(() =>{
        const fetchWorkouts = async () =>{
            //all of the fetch logic lives heere
            
            
            const response = await fetch('/api/workouts')
            //passing json from this response object into something we can work with
            const json = await response.json()
            //we have an array of workout objects
            if(response.ok){
                dispatch({type:'SET_WORKOUTS',payload:json})            }
        }
        fetchWorkouts()
    },[dispatch])
    //here only we have value for workouts then those workouts are mapped through.
    //if the workouts null just ignore the map 
    return(
        <div className="home">
            <div className='workouts'>
                
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home