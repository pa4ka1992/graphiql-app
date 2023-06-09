import { useState, type FC } from 'react';
import { uid } from 'uid';
import { useTranslation } from 'react-i18next';
import { Backdrop, SpeedDialAction, Typography, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SvgIconLogo } from 'shared';
import { AUTHOR_LIST } from '../constants';
import { AuthorListLogo } from './AuthorListLogo.styled';

export const FooterAuthors: FC = () => {
  const { t } = useTranslation(['layout']);
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Backdrop open={open} sx={{ zIndex: 100 }} />
      <AuthorListLogo
        ariaLabel="application authors"
        icon={
          <SvgIconLogo width={'40px'}>
            <GitHubIcon />
          </SvgIconLogo>
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {AUTHOR_LIST.map((action) => (
          <SpeedDialAction key={uid()} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </AuthorListLogo>

      {!isLessMd && (
        <Typography fontWeight={600} variant="body1" component="div" sx={{ color: 'secondary.main' }}>
          {t('Created by Power Rangers')}
        </Typography>
      )}
    </>
  );
};
