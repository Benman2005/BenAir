import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {Typography} from '@material-ui/core'
import {getLogs} from '../actions/flights'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

class Logs extends PureComponent{  
    componentDidMount(){
        this.props.getLogs()
    }

    render(){
        const {logs} = this.props

        return(
            <div>
            <Typography variant="headline">Check out the logs!</Typography>
            <Table>
                <TableBody>
                    <TableRow><TableCell>Total Requests:</TableCell><TableCell>{logs && logs.totalRequests}</TableCell></TableRow>
                    <TableRow><TableCell>Average Response Time:</TableCell><TableCell> {logs && Math.round(logs.averageTime *100)/100}</TableCell></TableRow>
                    <TableRow><TableCell>Min Response Time: </TableCell><TableCell>{logs && logs.minResponseTime}</TableCell></TableRow>
                    <TableRow><TableCell> Max Response Time:</TableCell><TableCell> {logs && logs.maxResponseTime}</TableCell></TableRow>
                    <TableRow><TableCell> Number of 2xx responses:</TableCell><TableCell>{logs && logs.twoHundreds}</TableCell></TableRow>
                    <TableRow><TableCell>Number of 4xx responses: </TableCell><TableCell>{logs && logs.fourHundreds}</TableCell></TableRow>
                    <TableRow><TableCell>Number of 5xx responses: </TableCell><TableCell>{logs && logs.fiveHundreds}</TableCell></TableRow>
                </TableBody>
            </Table>
            </div>
        )
    }
}
const mapStateToProps = state=>({
    logs:state.logs
})

export default connect(mapStateToProps, {getLogs})(Logs)
