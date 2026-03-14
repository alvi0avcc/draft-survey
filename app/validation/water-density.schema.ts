import * as yup from 'yup';

export const waterDensitySchema = yup.object().shape({
  measuredDensity: yup
    .number()
    .required('The measured density is missing.')
    .positive('Density must be positive')
    .min(1000, 'Density seems too low for water')
    .max(1050, 'Density seems too high for water')
    .typeError('Measured density must be a number'),

  measuredTemperature: yup
    .number()
    .required('The measured temperature is missing.')
    .min(-2, 'Water temperature seems too low')
    .max(40, 'Water temperature seems too high')
    .typeError('Measured temperature must be a number'),

  calibratedTemperature: yup
    .number()
    .required('Calibration temperature missed.')
    .oneOf([15, 20], 'Calibration temperature must be either 15°C or 20°C')
    .typeError('Calibration temperature must be a number'),
});

export type ValidatedWaterDensity = yup.InferType<typeof waterDensitySchema>;
