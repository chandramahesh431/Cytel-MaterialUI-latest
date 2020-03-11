import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: "#5EA9BF",
  secondary: "#E5E5E5",
  tertiary: "#4A4A4A",
  alert: "#F5A623",
  success: "#01CC01",
  error: "#FF0000",
  white: "#FFFFFF",
  textPrimary: "#383838",
  textLight: "#9b9b9b"
};

const cytelTheme = createMuiTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    tertiary: { main: colors.tertiary },
    textPrimary: { main: colors.textPrimary }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["DarwinPro"].join(","),
    colorTextPrimary: colors.textPrimary,
    headline: {
      fontWeight: 700
    },
    subheading: {
      fontWeight: 400
    },
    body1: {
      color: { main: colors.tertiary },
      fontWeight: 300,
      fontSize: 13,
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(",")
    },
    body2: {
      color: colors.textLight,
      fontWeight: 300,
      fontSize: 11
    },
    subtitle1: {
      color: "#757575",
      fontWeight: 100,
      fontSize: 11
    }
  },

  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(94, 169, 191, 0.9)"
      }
    },
    MuiBadge: {
      colorPrimary: {
        backgroundColor: "#ff576d",
        color: "#fff"
      }
    },
    MuiDialog: {
      paper: {
        borderRadius: 2
      }
    },
    MuiCardHeader: {
      title: {
        fontSize: 11,
        color: colors.textPrimary
      }
    },
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: 12
        }
      }
    },
    MuiMenuItem: {
      root: {
        lineHeight: 2
      }
    },
    MuiInputBase: {
      root: {
        display: "block",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
        fontSize: 12
      }
    },
    MuiInput: {
      root: {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
        fontSize: 12
      }
    },
    MuiTableRow: {
      root: {
        "&:nth-of-type(even)": {
          backgroundColor: "#f2f2f2"
        }
      },
      head: {
        height: 48
      }
    },
    MuiAvatar: {
      root: {
        float: "right",
        cursor: "pointer"
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        "&$expanded": { minHeight: 20 }
      },
      content: {
        "&$expanded": {
          margin: 0
        }
      }
    },

    MuiDivider: {
      root: {
        margin: "8px 0"
      }
    },
    MuiTableCell: {
      head: {
        fontWeight: "lighter",
        backgroundColor: "#f2f2f2",
        fontSize: 11,
        color: "#4a4a4a"
      },
      root: {
        border: "1px solid rgba(224, 224, 224, 1)",
        padding: "0 20px",
        width: "50%",
        "&:last-child": {
          borderRight: 0
        },
        "&:first-child": {
          borderLeft: 0
        },
        height: "auto"
      },
      body: {
        fontSize: 11,
        fontWeight: "lighter",
        color: "rgba(0, 0, 0, 0.54)",
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(",")
      }
    },
    MuiChip: {
      root: {
        borderRadius: 2,
        fontWeight: 300
      },
      colorPrimary: {
        color: "#fff"
      }
    },
    MuiTabs: {
      root: {
        boxShadow: "none",
        marginTop: "0px",
        marginLeft: 0,
        marginRight: 0
      }
    },
    MuiTab: {
      root: {
        fontWeight: 300,
        fontSize: 11,
        minWidth: "0 !important"
      },
      label: {
        fontFamily: "DarwinPro",
        textTransform: "none"
      },
      textColorSecondary: {
        color: "#9b9b9b"
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: "30px"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%"
      },
      marginNormal: {
        marginTop: 0,
        marginBottom: 0
      }
    },
    MuiRadio: {
      colorSecondary: {
        color: colors.textLight,
        "&$checked": {
          color: colors.primary
        }
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        color: colors.textLight,
        "&$checked": {
          color: colors.primary
        }
      }
    },
    MuiButton: {
      root: {
        textTransform: "none"
      },
      containedPrimary: {
        color: "#fff"
      }
    },
    MuiMenuItem: {
      root: {
        fontSize: 11
      }
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiSnackbar: {
      anchorOriginTopCenter: {
        top: 65
      }
    }
  }
});

export default cytelTheme;
