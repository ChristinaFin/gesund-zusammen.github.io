import React from "react";
import { Box, Typography, Avatar, Grid, Link } from "@material-ui/core";
import { Email, GetApp } from "@material-ui/icons";
import styled, { AnyStyledComponent } from "styled-components";
import { translated } from "../../util";
import PressContactPhoto from "../../images/solveigh_rathenow.png";
import BecomePart from "../common/BecomePart";

import PressKitLogo from "../../images/presskit_logo.svg";

interface IPressProps {
  lang: "de" | "en";
}

class PressContact extends React.PureComponent<IPressProps, {}> {
  render = () => {
    return (
      <>
        <PressContactWrapper paddingBottom={4}>
          <Typography variant="h2">
            {translated(this.props.lang).press.pageHeader}
          </Typography>
          <Grid container spacing={5} justify="flex-start" alignItems="center">
            <Grid item xs={12} sm={4}>
              <StyledAvatar alt="Solveigh Ratenow" src={PressContactPhoto} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1">
                {translated(this.props.lang).press.pressContactTitle}
              </Typography>
              <Typography variant="h4" color="primary">
                {translated(this.props.lang).press.pressContactName}
              </Typography>
              <Typography variant="body1">
                <StyledEmailIcon color="primary" fontSize="small" />
                {translated(this.props.lang).press.pressContactEmail}
              </Typography>
            </Grid>
          </Grid>
          <Box
            paddingBottom={4}
            paddingTop={8}
            marginTop={8}
            style={{ borderTop: "1px solid #CED7DB" }}
          >
            <Typography variant="h2">
              {translated(this.props.lang).press.resources}
            </Typography>
            <Typography variant="body2" color="primary">
              {translated(this.props.lang).press.resourcesLine1}
            </Typography>
            <Link href="/PressKit.zip">
              <StyledPressKitImage src={PressKitLogo}></StyledPressKitImage>
            </Link>
            <Typography variant="body2" color="primary">
              {translated(this.props.lang).press.resourcesLine2}
            </Typography>
            <StyledDownloadLink href="/PressKit.zip">
              <Typography variant="body2" color="primary">
                <StyledDownloadButton color="primary" fontSize="small" />
                {translated(this.props.lang).press.downloadLogo}
              </Typography>
            </StyledDownloadLink>
          </Box>
        </PressContactWrapper>
        <Box paddingBottom={4} marginTop={4}>
          <BecomePart lang={this.props.lang}></BecomePart>
        </Box>
      </>
    );
  };
}

const PressContactWrapper: AnyStyledComponent = styled(Box)`
  && {
    @media (min-width: 600px) {
      padding-right: 16rem;
    }
  }
`;

const StyledAvatar: AnyStyledComponent = styled(Avatar)`
  border: 8px solid rgba(0, 170, 200, 0.3);
`;

const StyledEmailIcon: AnyStyledComponent = styled(Email)`
  && {
    margin: 0.3rem 0.5rem 0 0;
    float: left;
  }
`;

const StyledDownloadLink: AnyStyledComponent = styled(Link)`
  && {
    display: inline-block;
    margin-top: 1rem;
  }
`;

const StyledDownloadButton: AnyStyledComponent = styled(GetApp)`
  && {
    margin: 0.2rem 0.5rem 0 0;
    float: left;
  }
`;

const StyledPressKitImage: AnyStyledComponent = styled.img`
  margin: 2rem 0;
  max-width: 100%;
`;

export default PressContact;
