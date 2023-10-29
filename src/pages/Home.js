import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import cakes from "../cakesData";
import CakeCard from '../components/CakeCard';
import { getAllCakes } from '../Actions/CakeActions';

export default function Home() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCakes())
    },[])
    
  return (
      <>
    <Navbar/>
    <div className="container">
        <div className="row justify-content-center">
            {cakes.map(cake=>{
                return (
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <CakeCard cake={cake}/>
                    </div>
                )
            })}
        </div>
        </div>
    </>
  )

}
