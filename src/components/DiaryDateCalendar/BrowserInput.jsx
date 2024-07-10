import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import scss from '../ModalSearchForm/ModalSearchForm.module.scss';
import { useTheme } from '@mui/material/styles';

export const BrowserInput = function BrowserInput(props) {
  const { inputProps, InputProps, ownerState, inputRef, error, ...other } =
    props;
  const theme = useTheme();
  return (
    <div className={scss.containerCal}>
      <Box
        sx={{
          display: 'flex',
          // flexDirection: 'column',
          alignItems: 'center',
          gap: '1px',
          // width: '100%',
          // [theme.breakpoints.up('sm')]: {
          //   gap: 0,
          // },
          // [theme.breakpoints.up('md')]: {
          //   gap: 0,
          // },
          '& input': {
            width: '140px',
            [theme.breakpoints.up('sm')]: {
              width: 240,
            },
            [theme.breakpoints.up('md')]: {
              width: 240,
            },
          },

          //   fontFamily: 'Verdana',
          //   border: 'none',
          //   outline: 'none',
          //   bgcolor: 'background.paper',
          //   fontSize: '34px',
          //   fontWeight: 700,
          //   '&::placeholder': {
          //     color: 'black',
          //   },
        }}
        ref={InputProps?.ref}
      >
        <input ref={inputRef} {...inputProps} {...other} />
        {InputProps?.endAdornment}
      </Box>
    </div>
  );
};

BrowserInput.propTypes = {
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes.bool,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
  ownerState: PropTypes.any,
};
