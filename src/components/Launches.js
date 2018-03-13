import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class Launches extends Component {
    constructor(){
        super()
    }

    render(){    

    let columnNames = 
            this.props.header.map((entry,index)=>{
            // console.log('header comp', entry.name, index);
            return <TableHeaderColumn key={index} style={{color: "black", fontSize: "22px"}}>{entry.name}</TableHeaderColumn>
            })


    let body = this.props.data.map((arrayElement, dataIndex)=>{
                    console.log('arrayElement', arrayElement.flight_number);
                return(
                    <TableRow key={dataIndex}>
                    <TableRowColumn key={`${dataIndex}C`}>{arrayElement.flight_number}</TableRowColumn>
                    <TableRowColumn key={`${dataIndex}C`}>{arrayElement.launch_date_local}</TableRowColumn>
                    <TableRowColumn key={`${dataIndex}C`}>{arrayElement.rocket.rocket_name}</TableRowColumn>
                    <TableRowColumn key={`${dataIndex}C`}>{arrayElement.launch_site.site_name_long}</TableRowColumn>
                    </TableRow>
                )})
             

    return(
  <Table style={{width: "900px", height: "200px", alignContent: "center", background: "#c7c5c1", alignText: "center"}} >
    <TableHeader adjustForCheckbox={false} displaySelectAll={false} style={{color: "black"}}>
      <TableRow >
            {JSON.stringify(columnNames)}
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
            {body}
    </TableBody>
  </Table>
    )
}
}