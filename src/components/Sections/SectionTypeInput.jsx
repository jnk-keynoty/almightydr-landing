import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import GridContainer from '../Grid/GridContainer';
import GridItem from "../Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import sectionTypeInputStyle from "assets/jss/material-kit-react/views/almightydrSections/sectionTypeInputStyle.jsx";
import CustomButton from '../Button/CustomButton';
import { Box, FormHelperText } from '@material-ui/core';

const validationSchema = yup.object({
    customer: yup
      .string('이름을 입력하여 주세요.')
      .required('이름은 필수 입력사항입니다.'),
    phone: yup
      .string('전화번호를 입력하여 주세요.')
      .min(10, '전화번호를 올바로 입력해 주시기 바랍니다.')
      .required('전화번호는 필수 입력사항입니다.'),
    email: yup
      .string('이메일 주소를 입력하여 주세요.')
      .email('올바른 형식이 아닙니다.'),
    privacy: yup
      .boolean()
      .oneOf([true], "개인정보 제공 동의는 필수입니다.")
  });
  
function SectionTypeInput(props) {
    const { buttonCaption, buttonColor, classes, topNode, } = props;
      const formik = useFormik({
        initialValues: {
            customer: '',
            email: '',
            phone: '',
            privacy: false,
          },      
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
          console.log(values);
          axios.post('http://strapi.almightydr.com/inquries', values)
          .then(function (res) {
              console.log(res);
              setSubmitting(false);
              resetForm();
          })
          .then(() => alert("Your inquire has been submitted"))
          .then(() => setSubmitting(false))
          .catch(function (err) {
              console.log(err);
          })
         },
      });
        return (
            <div className={classes.root}>
              <GridContainer className={classes.fullHeight}>
                <GridItem className={classes.topRow} align="flex-end">
                    <div className={`${classes.container} ${classes.fullHeight} ${classes.topRowInner} `}>
                        { topNode }
                    </div>
                </GridItem>
                <GridItem className={classes.bottomRow} align="flex-start">
                    <div className={classes.container}>
                        <form id="contactus" name="contactus" className={classes.root} autoComplete="off" onSubmit={formik.handleSubmit}>
                            <GridContainer spacing={1} className={classes.inputs}>
                                <GridItem sm="4">
                                    <TextField 
                                        fullWidth
                                        id="customer" 
                                        name="customer" 
                                        label="병원명/이름" 
                                        variant="outlined" 
                                        color="default" 
                                        value={formik.values.customer}
                                        onChange={formik.handleChange}
                                        error={formik.touched.customer && Boolean(formik.errors.customer)}
                                        helperText={formik.touched.customer && formik.errors.customer}                              
                                    />
                                </GridItem>
                                <GridItem sm="4">
                                    <TextField
                                        fullWidth
                                        id="phone" 
                                        name="phone" 
                                        label="전화번호" 
                                        variant="outlined" 
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}                              
                                    />
                                </GridItem>
                                <GridItem sm="4">
                                    <TextField 
                                        fullWidth 
                                        id="email" 
                                        name="email" 
                                        label="이메일 주소" 
                                        variant="outlined" 
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}                              
                                    />
                                </GridItem>
                            </GridContainer>
                            <div>
                                <CustomButton color={buttonColor} noShadow type="submit" buttonCaption={buttonCaption}/>
                            </div>
                            <div>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    name="privacy"
                                    color="primary"
                                    checked={formik.values.privacy}
                                    onChange={formik.handleChange}
                                />
                                }
                                label="개인정보 제공 동의"
                                className={classes.checkbox}
                            />
                            <FormHelperText
                                    error={!formik.values.privacy}                          
                            >
                              <Box textAlign="center">
                                {formik.touched.privacy && formik.errors.privacy}
                              </Box>
                            </FormHelperText>
                            </div>
                        </form>
                    </div>
                </GridItem>
              </GridContainer>
            </div>
        );
}

export default withStyles(sectionTypeInputStyle)(SectionTypeInput);