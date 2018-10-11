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
  
  //nothing is selected for dropdown/search select
  state={
      select1:null,
      select2:null
  }
  //get all origins from database on mount
  componentDidMount(){
      this.props.getOriginsFromDatabase()
  }
  //when origin/departure is selected from dropdown/search
  handleChange1 = async (select1) => {
      this.setState({ select1 });
      this.props.selectOrigin(select1.value)//adds origin to state
      this.props.getFlightsFromOrigin(select1.value) // gets destinations based on origin
      this.setState({select2: null}) // resets 2nd select dropdown(destination) in case of origin change
      this.props.destination && this.props.getFlight(select1.value, this.props.destination) // in case destination already chosen and origin changed, checks if flights available - just for that one scenario
  }

  handleChange2 = (select2) => {
    this.setState({ select2 });
    this.props.selectDestination(select2.value) //add destination to state
    this.props.getFlight(this.props.origin,select2.value) // gets flights for set origin and destination
  }
  render(){
    const { select1, select2 } = this.state;
    //these options are for the searchable select/dropdown. the options are called with api and later transformed to format for this particular select.
    let originOptions = null 
    let destinationOptions = null
    const {flights, origins, origin, destinations, destination} = this.props
    //this is where the returned origins are transformed to a format fittable for this select(library).
    if(origins) originOptions = origins.map(origin=>{return {value: origin, label: origin}}) 
    if(destinations) destinationOptions = destinations.map(destination=> {return {value: destination, label: destination}})
    
    return(
      <div>
        <div className="selectOrigin">
          <Typography variant="title"> Departure From </Typography>
          {origins && <Select value={select1}
          onChange={this.handleChange1}
          options={originOptions}
          ></Select>}
        </div>
        {origin && <Typography variant="title">Select Destination:</Typography>}
        <div>
            {destinations && <Select value={select2} onChange={this.handleChange2} options={destinationOptions}></Select>}
        </div>
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
const mapDispatchtoProps = {
  getAllFlights, 
  getFlightsFromOrigin, 
  selectOrigin, 
  selectDestination, 
  getFlight, 
  getOriginsFromDatabase
}
export default connect(mapStateToProps,mapDispatchtoProps)(Home)