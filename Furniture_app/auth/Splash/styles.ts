import { StyleSheet } from 'react-native';
import colors from '@/utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 50,
    paddingHorizontal: 30,
  },
  
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
  },
  
  textContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    lineHeight: 50,
  },
  
  innerTitle: {
    color: colors.secondary,
    textDecorationLine: 'underline',
  },
  
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  
  signUpButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  
  signUpButtonText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  signInButton: {
    backgroundColor: colors.transparent,
    paddingVertical: 10,
  },
  
  signInButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;