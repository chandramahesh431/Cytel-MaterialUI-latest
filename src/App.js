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
import "./App.css";

export default function CenteredGrid() {
  return (
    <Grid container>
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
              <Grid item xs="12">
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs="12">
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </Grid>
              <Grid item xs="12">
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </Grid>
              <Grid item xs="12">
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </Grid>
              <Grid item xs="12">
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </Grid>
              <Grid item xs="12">
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
}
