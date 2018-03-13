import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';


export default class TableExampleControlled extends Component {
  state = {
    selected: [1],
    open: false,
    selectedUser: {},
    userid: 0
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {

    console.log("selected row", selectedRows);
    const selectedIndex = selectedRows[0];
    this.props.selectSurvey(selectedIndex);
  }

  render() {
    var object = this.props.queryresults[0];
    var header = []
    
    for (var k in object){
        if (k !== 'certifications' && k !== 'mars' && k !== 'skills'){
            header.push(
                <TableHeaderColumn key={object.k}>{k}</TableHeaderColumn>
            )
        }
    }

    let values = this.props.queryresults.map((object, i)=>{
        var num = 0;
        return (
            <TableRow key={i} selected={this.isSelected(num++)} style={{width: "6.6%"}}>
                <TableRowColumn>{object.surveyid}</TableRowColumn>
                <TableRowColumn>{object.userid}</TableRowColumn>
                <TableRowColumn>{object.iq}</TableRowColumn>
                <TableRowColumn>{object.educationlvl}</TableRowColumn>
                <TableRowColumn>{object.maritalstatus}</TableRowColumn>
                <TableRowColumn>{object.children}</TableRowColumn>
                <TableRowColumn>{object.fertility.toString()}</TableRowColumn>
                <TableRowColumn>{object.heart.toString()}</TableRowColumn>
                <TableRowColumn>{object.seizures.toString()}</TableRowColumn>
                <TableRowColumn>{object.bloodpressure.toString()}</TableRowColumn>
                <TableRowColumn>{object.medications.toString()}</TableRowColumn>
            </TableRow>
        )
    })

    if (this.state.open){
        var SR = []
        var kitten = this.props.queryresults[this.state.selected];

        for (var y in kitten){
            SR.push(<span>{`${y}: ${kitten[y]}`}</span>)
        }
    }

    return (
    <div>
        {this.props.queryresults[0] && <Table onRowSelection={this.handleRowSelection} style={{borderRadius: '7px'}}>
            <TableHeader style={{width: "6.6%"}}>
                <TableRow style={{width: "6.6%"}}>
                    {header}
                </TableRow>
            </TableHeader>
            <TableBody >
                {values}
            </TableBody>
        </Table>}
    </div>
    )
}
}
