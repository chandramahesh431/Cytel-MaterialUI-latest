import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Apartment from "@material-ui/icons/Apartment";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import OpacityIcon from "@material-ui/icons/Opacity";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import "./App.css";
import CytelLogo from "../src/assets/cytel_owler_20190506_052832_original.jpg";
import imgSource from "../src/assets/download (1).png";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";
import red from "@material-ui/core/colors/red";

import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className="main">
      <Container className="ContainerHeader">
        <img className="logo" src={CytelLogo} alt="Logo" />
        <Avatar className="pic" alt="Remy Sharp" src={imgSource} />{" "}
      </Container>
      <Container className="ContainerBreadCum">
        <div className={classes.root}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/">
              Projects
            </Link>
            {/* <Link color="inherit" href="/getting-started/installation/">
              E502-5122-002-T-Cell-Lymphoma
            </Link> */}
            <Typography color="textPrimary">
              E502-5122-002-T-Cell-Lymphoma
            </Typography>
          </Breadcrumbs>
        </div>
      </Container>
      <Container className="Container">
        <Grid container spacing={1}>
          <Grid className="left-panel" item xs={12} sm={3} md={2}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <Apartment fontSize="small" />
                </ListItemIcon>
                Endpoints
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <PeopleAlt fontSize="small" />
                </ListItemIcon>
                Polpulation
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CreateNewFolderIcon fontSize="small" />
                </ListItemIcon>
                Enrollment
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <OpacityIcon fontSize="small" />
                </ListItemIcon>
                Dropout
              </MenuItem>
              <MenuItem className="active">
                <ListItemIcon>
                  <DashboardIcon fontSize="small" />
                </ListItemIcon>
                Designs
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DeviceHubIcon fontSize="small" />
                </ListItemIcon>
                Opertaional Costs
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <AssignmentIndIcon fontSize="small" />
                </ListItemIcon>
                Market Access
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <PhonelinkSetupIcon fontSize="small" />
                </ListItemIcon>
                Setup
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid className="right-panel" item xs={12} sm={9} md={10}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <DashboardIcon fontSize="small" />
                </ListItemIcon>
                Designs
              </MenuItem>
            </MenuList>
            <ExpansionPanel square expanded={true}>
              <ExpansionPanelSummary
                expandIcon={<MoreVertIcon />}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>OS Adaptive - With SSR</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid item xs="12">
                  <Grid item xs="12" className={classes.root}>
                    <div>
                      <TextField
                        className="txtfield"
                        id="standard-required"
                        label="Name"
                      />
                      <TextField
                        className="txtfield"
                        id="standard-required"
                        label="Design"
                      />
                      <TextField
                        className="txtfield"
                        id="standard-required"
                        label="Endpoint"
                      />
                      <TextField
                        className="txtfieldRequired"
                        id="standard-required"
                        label="Arms"
                      />
                      <TextField
                        className="txtfield"
                        id="standard-required"
                        label="Assessment"
                      />
                    </div>
                    <Divider />
                    <div>
                      <TextField
                        className="txtfield"
                        id="standard-required"
                        label="Hypothesis"
                      />
                      <TextField
                        className="txtfieldRequired"
                        id="standard-required"
                        label="Ratio"
                      />
                      <TextField
                        className="txtfieldRequired"
                        id="standard-required"
                        label="Sample Size"
                      />
                    </div>
                    <Divider />
                    <div>
                      <TextField
                        className="txtfield"
                        id="standard-required"
                        label="Follow-up time"
                      />
                      <TextField
                        className="txtfieldRequired"
                        id="standard-required"
                        label="Type1 Error"
                      />
                      <TextField
                        className="txtfield"
                        id="standard-required"
                        label="Test statistic"
                      />
                      <TextField
                        className="txtfield"
                        id="standard-required"
                        label="Test Type"
                      />
                    </div>
                    {/* <Divider />
                    <div>
                      <TextField
                        required
                        id="standard-required"
                        label="Required"
                      />
                      <TextField
                        required
                        id="standard-required"
                        label="Required"
                      />
                    </div> */}
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
