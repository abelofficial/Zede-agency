import { Grid, makeStyles, Paper, Slide, Typography } from "@material-ui/core";
import { uniqueId } from "lodash";
import { useOnScreen } from "../../utils/hooks/useOnScreen";
import sharedStyle from "../../utils/style/js/sharedStyle";

const AboutZede = ({ data }) => {
  const useStyle = makeStyles((theme) => {
    const mainStyle = sharedStyle();
    return {
      wrapper: {
        ...mainStyle.wrapper,
      },
      container: {
        ...mainStyle.container,
      },
      title: {
        ...mainStyle.sectionHeading,
        marginBottom: theme.spacing(5),
      },
      subTitle: {
        ...mainStyle.sectionHeading,
        fontWeight: 400,
        fontSize: "30px",
        marginBottom: theme.spacing(3),
      },
      text: {
        lineBreak: "strict",
      },
      image: {
        width: "100%",
        maxWidth: "150px",
      },
    };
  });
  const classes = useStyle();
  const [setRef, visible] = useOnScreen({ threshold: "0.2" });
  let timeout = 300;
  return (
    <Paper className={classes.wrapper} ref={setRef}>
      <Grid container className={classes.container} spacing={5}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems='center'
            justify='center'
            style={{ overflow: "hidden" }}
          >
            <Grid item md={8} xs={12}>
              <Typography
                variant='h3'
                color='textSecondary'
                className={classes.title}
              >
                {data.sectionOne.title}
              </Typography>
              <Typography
                variant='h4'
                color='textSecondary'
                className={classes.subTitle}
              >
                {data.sectionOne.subTitle}
              </Typography>

              <Slide direction='up' in={visible} timeout={1000}>
                <Typography color='textSecondary' className={classes.text}>
                  {data.sectionOne.paragraph}
                </Typography>
              </Slide>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            alignItems='center'
            spacing={5}
            style={{ overflow: "hidden" }}
          >
            <Grid item md={7} sm={12}>
              <Grid container spacing={3}>
                {data.sectionTwo.medial.map((url) => (
                  <Grid item xs={4} key={uniqueId()}>
                    <Slide
                      direction='right'
                      in={visible}
                      timeout={(timeout += 300)}
                    >
                      <img src={url} className={classes.image} alt='' />
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item md={5} sm={12}>
              <Typography
                variant='h3'
                color='textSecondary'
                className={classes.title}
              >
                {data.sectionTwo.title}
              </Typography>

              <Typography color='textSecondary' className={classes.text}>
                {data.sectionTwo.paragraph}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutZede;
