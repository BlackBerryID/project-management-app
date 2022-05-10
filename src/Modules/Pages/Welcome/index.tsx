import { Box, Button } from '@mui/material';
import { Paths } from './../../../constants';
import './welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome">
      <Box
        className="welcome__login"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          maxWidth: '1200px',
        }}
      >
        <Button variant="contained" size="medium" sx={{ mx: 1.5 }} href={Paths.signIn}>
          Log In
        </Button>
        <Button variant="contained" size="medium" sx={{ mx: 1.5 }} href={Paths.signUp}>
          Sign Up
        </Button>
      </Box>
      <div className="welcome__wrapper main">
        <div className="welcome__info">
          <h2 className="welcome__info--title">Project Management App</h2>
          <p className="welcome__info--text">
            Project Management App - a training project to create an application that helps an
            individual in a team or group of developers achieve their goals.
          </p>
          <h3 className="welcome__info--subtitle">RS School. Курс React.</h3>
          <p className="welcome__info--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil consequuntur
            amet repudiandae iusto atque dignissimos? Reprehenderit dolor, placeat tenetur
            consequuntur, alias laborum odio voluptas hic unde asperiores repudiandae culpa.
          </p>
        </div>
        <div className="welcome__img info"></div>
      </div>
      <div className="welcome__wrapper team">
        <div className="welcome__img team-img"></div>
        <div className="welcome__team">
          <h2 className="welcome__team--title">Our team</h2>
          <div className="team__members">
            <div className="team__member">
              <div className="team__member-img memb-1"></div>
              <div className="team__member-info">
                <h3 className="team__member-title">Name</h3>
                <p className="team__member-text">
                  Description .. ... .... ... ...... .... .... ........ descriotion
                </p>
              </div>
            </div>
            <div className="team__member">
              <div className="team__member-img memb-1"></div>
              <div className="team__member-info">
                <h3 className="team__member-title">Name</h3>
                <p className="team__member-text">
                  Description .. ... .... ... ...... .... .... ........ descriotion
                </p>
              </div>
            </div>
            <div className="team__member">
              <div className="team__member-img memb-1"></div>
              <div className="team__member-info">
                <h3 className="team__member-title">Name</h3>
                <p className="team__member-text">
                  Description .. ... .... ... ...... .... .... ........ descriotion
                </p>
              </div>
            </div>
            <div className="team__member">
              <div className="team__member-img memb-1"></div>
              <div className="team__member-info">
                <h3 className="team__member-title">Name</h3>
                <p className="team__member-text">
                  Description .. ... .... ... ...... .... .... ........ descriotion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome__wrapper video">
        <div className="welcome__video">
          <h2 className="welcome__video--title">Presentation</h2>
          <div className="welcome__video--video">
            <div className="welcome__video--video-container">
              <h2 className="welcome__video--title">Video-presentation</h2>
              <p className="welcome__video--text">About our project &hellip;</p>
              <p className="welcome__video--link">
                <a
                  className="welcome__video--btn"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More &raquo;
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="welcome__img video-img"></div>
      </div>
    </div>
  );
};

export default Welcome;
