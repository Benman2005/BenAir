import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {Typography} from '@material-ui/core'
import {getAllFlights, getFlightsFromOrigin, selectOrigin, selectDestination, getFlight, getOriginsFromDatabase} from '../actions/flights'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Select from 'react-select'

class Home extends PureComponent{
    state={
        select1:null,
        select2:null
    }

    componentDidMount(){
        this.props.getOriginsFromDatabase()
    }
    // componentDidUpdate(){
    //     this.props.destinations && this.props.selectDestination(this.props.destinations[0])&& console.log("did update" + this.props.destinations[0])
    //     this.props.origin && this.props.destination && getFlight(this.props.origin, this.props.destinations[0])
    // }
    selectDeparture = (origin)=>{
        this.props.selectOrigin(origin)
        this.props.getFlightsFromOrigin(origin)

    }

    selectDestination = (destination)=>{
        this.props.selectDestination(destination)
        this.props.getFlight(this.props.origin, destination )
    }
    handleChange1 = async (select1) => {
        this.setState({ select1 });
        this.props.selectOrigin(select1.value)
        this.props.getFlightsFromOrigin(select1.value)
        this.setState({select2: null})
        this.props.getFlight(select1.value, this.props.destination)
      }

      handleChange2 = (select2) => {
        this.setState({ select2 });
        this.props.selectDestination(select2.value)
        this.props.getFlight(this.props.origin,select2.value)
      }
      render(){
        let destinationOptions = null
        let originOptions = null
        const { select1, select2 } = this.state;

        const {flights, origins, origin, destinations, destination} = this.props
        
        if(origins) originOptions = origins.map(origin=>{return {value: origin, label: origin}})     
        
        if(destinations) destinationOptions = destinations.map(destination=> {return {value: destination, label: destination}})
        
        return(
            <div>
                {/* <Button onClick={()=>this.props.getAllFlights()}> See All Flights</Button> */}
                <div className="selectOrigin">
                <Typography variant="title"> Departure From </Typography>
                {origins && <Select value={select1}
                onChange={this.handleChange1}
                options={originOptions}
                ></Select>}
                {/* {origins.map(origin=><Button onClick={()=>this.selectDeparture(origin.value)}>{origin.value}</Button>)} */}
                </div>
                {origin && <Typography variant="title">
                Select Destination:
                </Typography>}
                <div>
                {destinations && <Select value={select2} onChange={this.handleChange2} options={destinationOptions}></Select>}
                </div>

                {/* <div className="destinationsButtons">
                    {origin && flights && flights.map(flight=><Button key={flight.id} onClick={()=>{this.selectDestination(flight.destination)}}>{flight.destination}</Button>)}
                </div> */}
                <div className ="flightsTable">
                    {flights && origin && destination &&
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Origin
                            </TableCell>
                            <TableCell>
                                Destination
                            </TableCell>
                            <TableCell>
                                Time of Departure
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flights && flights.map(flight=> {return(
                            <TableRow key={flight.id}>
                                <TableCell>
                                    {flight.origin}
                                </TableCell>
                                <TableCell>
                                    {flight.destination}
                                </TableCell>
                                <TableCell>
                                    {flight.departure} local time
                                </TableCell>
                                <TableCell>
                                € {flight.price}
                                </TableCell>
                            </TableRow>
                        )})}
                    </TableBody>
                </Table>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    flights: state.flights.flights,
    origin: state.origin,
    origins:state.origins,
    destination: state.destination,
    destinations: state.destinations
})
export default connect(mapStateToProps,{getAllFlights, getFlightsFromOrigin, selectOrigin, selectDestination, getFlight, getOriginsFromDatabase})(Home)