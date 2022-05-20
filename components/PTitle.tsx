import styles from '../styles/Header.module.scss';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        titleFont2: React.CSSProperties;
        titleFont3: React.CSSProperties;
        titleFont4: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        titleFont2?: React.CSSProperties;
        titleFont3?: React.CSSProperties;
        titleFont4?: React.CSSProperties;
    }
  }
  
  // Update the Typography's variant prop options
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        titleFont2: true;
        titleFont3:true;
        titleFont4:true;
    }
  }
const theme = createTheme({
    typography: {
      titleFont2: {
        fontSize: 55,
      },
      titleFont3: {
        fontSize: 45,
      },
      titleFont4: {
        fontSize: 35,
      },
    },
  });
export default function PTitle(props:any){
    return (
        <ThemeProvider theme={theme}>
        <Typography  sx={{fontFamily: 'Proxima Nova Rg',
                    fontWeight: '800', typography: { sm: 'titleFont3', xs: 'titleFont4', md:'titleFont2' } }}>
          <span className={props.className}>{props.title}</span>
        </Typography>
        </ThemeProvider>
    )
}
