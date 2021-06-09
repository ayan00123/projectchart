import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Employeedata from "./Employeedata";
import DonutChart from 'react-donut-chart';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const china = Employeedata.filter(function (cvalue) {
  return cvalue.location === "China"
})
const chinavalue = china.map(function (chvalue) {
  return parseFloat(chvalue.currSalary.slice(1, chvalue.currSalary.length))
})
const currslry = chinavalue.reduce(function (a, b) {
  return a + b
})
const chinaMean = currslry / chinavalue.length;


const japan = Employeedata.filter(function (jvalue) {
  return jvalue.location === "Japan"
})
const japanvalue = japan.map(function (jhvalue) {
  return parseFloat(jhvalue.currSalary.slice(1, jhvalue.currSalary.length))
})
const currslary = japanvalue.reduce(function (c, d) {
  return c + d
})
const japanMean = currslary / japanvalue.length;

const philippines = Employeedata.filter(function (pvalue) {
  return pvalue.location === "Philippines"
})
const philippinesvalue = philippines.map(function (phvalue) {
  return parseFloat(phvalue.currSalary.slice(1, phvalue.currSalary.length))
})
const currslarry = philippinesvalue.reduce(function (e, f) {
  return e + f
})
const philippinesMean = currslarry / philippinesvalue.length;

const thailand = Employeedata.filter(function (tvalue) {
  return tvalue.location === "Thailand"
})
const thailandvalue = thailand.map(function (thvalue) {
  return parseFloat(thvalue.currSalary.slice(1, thvalue.currSalary.length))
})
const currslarrry = thailandvalue.reduce(function (g, h) {
  return g + h
})
const thailandMean = currslarrry / thailandvalue.length;

const malaysia = Employeedata.filter(function (mvalue) {
  return mvalue.location === "Malaysia"
})
const malaysiavalue = malaysia.map(function (mhvalue) {
  return parseFloat(mhvalue.currSalary.slice(1, mhvalue.currSalary.length))
})
const currslarrryy = malaysiavalue.reduce(function (i, j) {
  return i + j
})
const malaysiaMean = currslarrryy / malaysiavalue.length;

const vietnam = Employeedata.filter(function (vvalue) {
  return vvalue.location === "Vietnam"
})
const vietnamvalue = vietnam.map(function (vhvalue) {
  return parseFloat(vhvalue.currSalary.slice(1, vhvalue.currSalary.length))
})
const currslarrryye = vietnamvalue.reduce(function (k, l) {
  return k + l
})
const vietnamMean = currslarrryye / vietnamvalue.length;


function createData(location, Salary) {
  return { location, Salary };
}

const rows = [
  createData('China', `$${chinaMean}`),
  createData('Japan', `$${japanMean}`),
  createData('Philippines', `$${philippinesMean}`),
  createData('Thailand', `$${thailandMean}`),
  createData('Malaysia', `$${malaysiaMean}`),
  createData('Vietnam', `$${vietnamMean}`),

];
console.log(rows)


export default function BasicTable() {
  const classes = useStyles();
  const [search, setSearch] = useState("")
  const [tabTwo, setTabTwo] = useState(false)

  const tab2 = () => {
    setTabTwo(true);
  }
  const tab1 = () => {
    setTabTwo(false)
  }

  console.log(search);

  return (
    <>
      <div className="button">
        <button onClick={tab1} className="buttonone">Table view</button>
        <button onClick={tab2} className="buttonone">Chart view</button>
      </div >

      {!tabTwo ?
        <div>

          <input className="searchbox" type="text" onChange={(a) => setSearch(a.target.value)} placeholder="search country name" />
          <TableContainer className="allbox" component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow className="row">
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center"> Salary</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.filter((r) => {
                  if (r.location.toLowerCase().includes(search.toLowerCase())) {
                    return r
                  }
                }).map((row) => (
                  <TableRow key={row.location}>
                    <TableCell align="center" component="th" scope="row">
                      {row.location}
                    </TableCell>
                    <TableCell align="center">{row.Salary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div >

        : <div>
          <div className="pie" >
            
            <DonutChart
              data={[
                { label: 'China', value: chinaMean,  },
                { label: 'Japan', value: japanMean,  },
                { label: 'Philippines', value: philippinesMean,   },
                { label: 'Thailand', value: thailandMean,  },
                { label: 'Malaysia', value: malaysiaMean,  },
                { label: 'Vietnam', value: vietnamMean,   }
              ]} />
          </div>


        </div>}
    </>
  );
}
