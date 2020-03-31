import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { translated } from "../../util";

import InfoBox from "../common/InfoBox";

interface IInitiativeProps {
  lang: "de" | "en";
}

class Initiative extends React.Component<IInitiativeProps, {}> {
  render = () => {
    return (
      <Box id="initiative" paddingBottom={4} marginTop={4}>
        <Typography variant="h2">
          {translated(this.props.lang).main.title}
        </Typography>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: translated(this.props.lang).main.content,
          }}
        ></Typography>
        <Box marginTop={4}>
          <Grid container spacing={4}>
            <InfoBox
              title={translated(this.props.lang).boxes.initiative.title}
              content={translated(this.props.lang).boxes.initiative.content}
            ></InfoBox>
            <InfoBox
              title={translated(this.props.lang).boxes.support.title}
              content={translated(this.props.lang).boxes.support.content}
            ></InfoBox>
            <InfoBox
              title={translated(this.props.lang).boxes.ecosystem.title}
              content={translated(this.props.lang).boxes.ecosystem.content}
            ></InfoBox>
          </Grid>
        </Box>
      </Box>
    );
  };
}

export default Initiative;
