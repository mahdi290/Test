import axios from 'axios'
import moment from 'moment';
import React, { useState, useEffect, useLayoutEffect } from 'react'
import Loader from 'react-spinners/HashLoader';//*Hasloader load le page sous une form 
import Error from '../components/Error';
function BookingScreen({ match }) {
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [room, setroom] = useState();
    const roomid=match.params.roomid
    const rentperday=match.params.rentperday
    const fromdate=moment(match.params.fromdate,'DD-MM-YYYY')
    const todate=moment (match.params.todate,'DD-MM-YYYY') //*lorsque tu choisis la date il s affiche dans bookingscreen
    const totaldays=moment.duration(todate.diff(fromdate)).asDays()+1 //*+1 because when u check 17 to 19 =3 not 2     
    const [totalamount,settotalamount]=useState();
    const userid=JSON.parse(localStorage.getItem('currentuser'));
    console.log(userid._is);
    useEffect(async () => {
        try {
            setloading(true);
            const data = (await axios.post('/api/rooms/getroombyid', { roomid: match.params.roomid })).data;
           settotalamount(data.rentperday*totaldays);
            setroom(data);
            setloading(false);


        } catch (error) {
            setloading(false);
            seterror(true);

        }

    }, []);
    async function bookRoom(){
        const bookingDetails={
            room,
            userid:userid._is,
            fromdate,
            todate,
            totalamount,
            totaldays
        }
        try{
            const result=await axios.post('/api/bookings/bookroom',bookingDetails)
        }catch(error){

        }

    }

    return (
        <div className='m-5'>
            {loading ? (<Loader />) : room ?   (<div>

                <div className="row justify-content-center mt-5 bs">

                    <div className="col-md-5">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className='bigimg' />
                    </div>
                    <div className="col-md-5">
                        <div style={{ textAlign: 'right' }} >
                            <h1> Booking details</h1>
                            <hr />
                            <b>
                                <p>Name :{JSON.parse(localStorage.getItem('currentuser')).name}</p>
                                <p>From Date : {match.params.fromdate}</p>
                                <p>To Date : {match.params.todate}  </p>
                                <p> Max Count: {room.maxcount} </p>
                            </b>

                        </div>
                        <div style={{ textAlign: 'right' }} >
                            <b>
                                <h1> Amount</h1>
                                <hr />
                                <p>Total days: {totaldays} </p>
                                <p>rentperday: {room.rentperday}</p>
                                <p>Total Amount:{totalamount} </p>
                            </b>
                        </div>
                        <div style={{ float: 'right' }}>
                            <button className='btn btn-primary' onClick={bookRoom}>Valider   </button>

                        </div>

                    </div>

                </div>
            </div>): (<Error/>)}
        </div>
    )

}
export default BookingScreen