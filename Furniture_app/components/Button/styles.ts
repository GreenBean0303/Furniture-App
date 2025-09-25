import { StyleSheet } from 'react-native';
import colors from '@/utils/colors';  

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  secondaryButton: {
    backgroundColor: colors.transparent,
    paddingVertical: 10,
  },
  
  buttonText: {
    color: colors.textLight,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;