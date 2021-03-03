import logo from './logo.svg';
import '../node_modules/react-vis/dist/style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Tab from  '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';


import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import './App.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines,VerticalBarSeries, LineSeries,RadialChart} from 'react-vis';
import { render } from '@testing-library/react';
import { blue, lightBlue, orange, red } from '@material-ui/core/colors';
// import {
//   SortingState,
//   LocalSorting,
//   PagingState,
//   LocalPaging,
//   ColumnOrderState
// } from '@devexpress/dx-react-grid';
// import {
//   Grid,
//   TableView,
//   TableHeaderRow,
//   PagingPanel,
//   DragDropContext
// } from '@devexpress/dx-react-grid-material-ui';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary 
    
  },
}));


const myData = [ {angle: 10, radius: 100, label: "Type 1"}, {angle: 2, label: 'Type 2', radius: 200}, {angle: 5, radius: 500, label: 'Type 3'} , {angle: 6, radius: 300 , label: 'Type 4'} ]
const myDATA = [
  { y: 15, x: "week1" },
  { y: 10, x: "week2" },
  { y: 20, x: "week3" },
  { y: 2,x: "week4" },
  { y: 9,x: "week5" },
];
const myDAta = [{angle: 10, radius: 100, label: "FEMALES", subLabel : "17%"}, {angle: 15, radius: 100,label: 'MALES',  subLabel:"83%"}];


export default function App()
{
  const classes = useStyles();

  return (


  
    
    <div className={classes.root}>

<AppBar position="static">
  <Tabs value={3}  aria-label="simple tabs example">
    <Tab label="Item One"  />
    <Tab label="Item Two"  />
    <Tab label="Item Three"  />
  </Tabs>
</AppBar>
      <Grid container spacing={3}>
        <Grid item xs>
        <div id="graph1" className="left" >
      <Paper elevation={20}>
        <RadialChart
              data={myData}  width={400}
                height={400} 
                  showLabels={true}
                  animation = {true}
                  padAngle = {0}
                  margin = {5}
      /> 
      <Typography gutterBottom variant="subtitle1" align="center" style={{cursor : 'pointer'}} >
                  TYPES OF EXERCISES PERFORMED 
                </Typography>
      </Paper>
      
      </div>
      
        </Grid>
        <Grid item xs>
        <div id="graph2" className="center">
      <Paper elevation={20}>
        <XYPlot
          width={400}
          height={400}
          margin={{
            left: 70
          }}
          xType="ordinal"
        >
        <VerticalBarSeries
            data={myDATA}
          />
          <XAxis />
          <YAxis />
        </XYPlot>
        <Typography gutterBottom variant="subtitle1" align="center" style={{cursor : 'pointer'}} >
                  NUMBER OF PATIENTS DIAGNOSED
                </Typography>
      </Paper>
  
      </div>  
        </Grid>
        <Grid item xs>
        <div id="graph3" className="right">
        <Paper elevation={20}>
        
        <RadialChart
              data={myDAta}  width={400}
                height={400} 
                  showLabels={true}
                  animation = {true}
                  
      />    
       <Typography gutterBottom variant="subtitle1" align="center" style={{cursor : 'pointer',textAlign:'center'}} >
                  TOTAL GENDER RATIO 
                </Typography>    
      </Paper> 
     
      </div>

      
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>XS = 3</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>XS = 3</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        
      </Grid>

      <Divider className={classes.divider} />
    </div>

    
  );
}


// function App() {
//   const myData = [ {angle: 10, radius: 100, label: "Type 1"}, {angle: 2, label: 'Type 2', radius: 200}, {angle: 5, radius: 500, label: 'Type 3'} , {angle: 6, radius: 300 , label: 'Type 4'} ]
//   const myDATA = [
//     { y: 15, x: "week1" },
//     { y: 10, x: "week2" },
//     { y: 20, x: "week3" },
//     { y: 2,x: "week4" },
//     { y: 9,x: "week5" },
//   ];
//   const myDAta = [{angle: 10, radius: 100, label: "FEMALES", subLabel : "83%"}, {angle: 15, radius: 100,label: 'MALES',  subLabel:"17%"}];
  
// //   return (
    
    
  
//     <div  className="App" >
      


      

      

//       {/* <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
//         <div class="container-fluid">
//           <div class="navbar-wrapper">
//             <a class="navbar-brand" href="javascript:;">Dashboard</a>
//           </div>
//           <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="sr-only">Toggle navigation</span>
//             <span class="navbar-toggler-icon icon-bar"></span>
//             <span class="navbar-toggler-icon icon-bar"></span>
//             <span class="navbar-toggler-icon icon-bar"></span>
//           </button>
//           <div class="collapse navbar-collapse justify-content-end">
//             <ul class="navbar-nav">
//               <li class="nav-item">
//                 <a class="nav-link" href="javascript:;">
//                   <i class="material-icons">notifications</i> Notifications
//                 </a>
//               </li>
              
//             </ul>
//           </div>
//         </div>
//       </nav> */}
      


//       <div id="graph1" className="left" >
//       <Paper elevation={6}>
//         <RadialChart
//               data={myData}  width={400}
//                 height={400} 
//                   showLabels={true}
//                   animation = {true}
//                   padAngle = {0}
//                   margin = {5}
//       /> 
//       </Paper>
//       </div>


//       <div id="graph2" className="center">
//       <Paper elevation={6}>
//         <XYPlot
//           width={400}
//           height={400}
//           margin={{
//             left: 70
//           }}
//           xType="ordinal"
//         >
//         <VerticalBarSeries
//             data={myDATA}
//           />
//           <XAxis />
//           <YAxis />
//         </XYPlot>
//       </Paper>
  
//       </div>  
//         <div id="graph3" className="right">
//         <Paper elevation={6}>
        
//         <RadialChart
//               data={myDAta}  width={400}
//                 height={400} 
//                   showLabels={true}
//                   animation = {true}
//       />        
//       </Paper> 
//       </div>
//       <div id="graph2" className="center">
//       <Paper elevation={6}>
//         <XYPlot
//           width={400}
//           height={400}
//           margin={{
//             left: 70
//           }}
//           xType="ordinal"
//         >
//         <VerticalBarSeries
//             data={myDATA}
//           />
//           <XAxis />
//           <YAxis />
//         </XYPlot>
//       </Paper>
  
//       </div>  
//         <div id="graph3" className="right">
//         <Paper elevation={6}>
        
//         <RadialChart
//               data={myDAta}  width={400}
//                 height={400} 
//                   showLabels={true}
//                   animation = {true}
//       />        
//       </Paper> 
//       </div>
//       <div id="graph2" className="center">
//       <Paper elevation={6}>
//         <XYPlot
//           width={400}
//           height={400}
//           margin={{
//             left: 70
//           }}
//           xType="ordinal"
//         >
//         <VerticalBarSeries
//             data={myDATA}
//           />
//           <XAxis />
//           <YAxis />
//         </XYPlot>
//       </Paper>
  
//       </div>  
//         <div id="graph3" className="right">
//         <Paper elevation={6}>
        
//         <RadialChart
//               data={myDAta}  width={400}
//                 height={400} 
//                   showLabels={true}
//                   animation = {true}
//       />        
//       </Paper> 
//       </div>

//       {/* <Paper>
//     <Grid columns={12} rows={12}>
//       <PagingState defaultPageSize={5} />
//       <SortingState
//         defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
//       />
//       <ColumnOrderState defaultOrder={['name', 'artist', 'year']} />
//       <LocalSorting />
//       <LocalPaging />
//       <DragDropContext />
//       <TableView allowColumnReordering />
//       <TableHeaderRow allowSorting allowDragging />
//       <PagingPanel allowedPageSizes={[0, 5, 10, 20]} />
//     </Grid>
//   </Paper>
//      */}

//      <div>
       
//         {/* <Grid container>
//         <Grid item xs={6} style={{background:red}}>
//           <XYPlot
//           width={400}
//           height={400}
//           margin={{
//             left: 70
//           }}
//           xType="ordinal"
//         >
//         <VerticalBarSeries
//             data={myDATA}
//           />
//           <XAxis />
//           <YAxis />
//         </XYPlot>
//         </Grid>
//         <Grid item xs={6} style={{background:blue}}>
//          <XYPlot
//           width={400}
//           height={400}
//           margin={{
//             left: 70
//           }}
//           xType="ordinal"
//         >
//         <VerticalBarSeries
//             data={myDATA}
//           />
//           <XAxis />
//           <YAxis />
//         </XYPlot>
//         </Grid>
//       </Grid> */}
//       </div>

// =    </div>


    

    
    
//   )
// }

// export default App;
