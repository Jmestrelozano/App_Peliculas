import ImageColors from 'react-native-image-colors';

export const getPosterColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri);
  let primary, secondary;

  if (colors.platform === 'android') {
    primary = colors.dominant;
    secondary = colors.average;
  }

  return {
    primary,
    secondary,
  };
};
